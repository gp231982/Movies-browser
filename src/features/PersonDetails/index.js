import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Biography,
    MainInfo,
    PersonBirthDetails,
    DateLabel,
    PersonTile,
    PersonTitle,
    Picture,
    StyledPersonDetails,
    Title,
    PersonBirthData,
    PlaceLabel,
} from "./styled";
import { MovieTile } from "../../common/MovieTile";
import { Content, Wrapper } from "../MovieList/styled";
import {
    fetchPersonDetailsRequest,
    selectPersonDetails,
    selectPersonError,
    selectPersonLoading,
} from "../../slices/personDetailSlice";
import {
  fetchPersonCreditsRequest,
  selectData,
  selectError,
  selectLoading,
} from "../../slices/personCreditsSlice";
import { Loading } from "../../common/States/Loading";
import { Error } from "../../common/States/Error";
import { selectPersonId } from "../../slices/peopleSlice";
import { basicImageUrl } from "../MovieList";
import { handlePeopleClick } from "../../slices/peopleSlice";
import blankPoster from "../MovieDetails/BlankMoviePoster.png";
import { handleMovieClick } from "../../slices/movieSlice";
import { HomeLink } from "../../common/Header/styled";
import blankPicture from "../../common/PersonTile/BlankPicture.png";

export const PersonDetails = () => {
  const dispatch = useDispatch();
  const selectedPersonId = useSelector(selectPersonId);
  const credits = useSelector(selectData);
  const loadingDetails = useSelector(selectPersonLoading);
  const loadingCredits = useSelector(selectLoading);
  const errorDetails = useSelector(selectPersonError);
  const errorCredits = useSelector(selectError);
  const details = useSelector(selectPersonDetails);

    useEffect(() => {
        if (selectedPersonId) {
            dispatch(fetchPersonCreditsRequest(selectedPersonId));
            dispatch(fetchPersonDetailsRequest(selectedPersonId));
            localStorage.setItem(
                "selectedPersonId",
                JSON.stringify(selectedPersonId)
            );
        }
    }, [dispatch, selectedPersonId]);

    useEffect(() => {
        const storedPersonId = localStorage.getItem("selectedPersonId");
        if (storedPersonId) {
            dispatch(handlePeopleClick(JSON.parse(storedPersonId)));
        }
    }, [dispatch]);

    const handleMovieClickHandler = (movieId) => {
        dispatch(handleMovieClick(movieId));
    };

  if (loadingDetails || loadingCredits) {
    return <Loading />;
  }

  if (errorDetails || errorCredits) {
    return <Error />;
  }

  
  return (
    <>
      <StyledPersonDetails>
        <PersonTile>
          <Picture
            src={
              details.poster_path
                ? `${basicImageUrl}${details.poster_path}`
                : blankPicture
            }
          />
          <MainInfo>
            <PersonTitle>
              {details.name ? details.name : "No data available"}
            </PersonTitle>
            <PersonBirthDetails>
              <DateLabel>
                Date of birth:
                <PersonBirthData>
                  {details.birthday
                    ? `${details.birthday.slice(
                        8,
                        10
                      )}.${details.birthday.slice(
                        5,
                        7
                      )}.${details.birthday.slice(0, 4)}`
                    : "No data available"}
                </PersonBirthData>
              </DateLabel>
              <PlaceLabel>
                Place of birth:
                <PersonBirthData>
                  {details.place_of_birth
                    ? details.place_of_birth
                    : "No data available"}
                </PersonBirthData>
              </PlaceLabel>
            </PersonBirthDetails>
            <Biography>
              {details.biography ? details.biography : "No data available"}
            </Biography>
          </MainInfo>
        </PersonTile>
      </StyledPersonDetails>
      <Content>
        <Title>
          Movies - cast {credits.cast ? `(${credits.cast.length})` : null}
        </Title>
        <Wrapper>
          {credits.cast
            ? credits.cast.map((personCast) => (
                <HomeLink
                  to={`/movie/${personCast.id}`}
                  key={personCast.id}
                  onClick={() => handleMovieClickHandler(personCast.id)}
                >
                  <MovieTile
                    title={personCast.title ? personCast.title : null}
                    posterPath={
                      personCast.poster_path
                        ? `${basicImageUrl}${personCast.poster_path}`
                        : blankPoster
                    }
                    releaseDate={
                      personCast.release_date
                        ? personCast.release_date.slice(0, 4)
                        : null
                    }
                    voteAverage={
                      personCast.vote_average
                        ? personCast.vote_average.toFixed(1).replace(".", ",")
                        : null
                    }
                    voteCount={
                      personCast.vote_count ? personCast.vote_count : "No"
                    }
                    genre_ids={
                      personCast.genre_ids
                        ? personCast.genre_ids.slice(0, 2)
                        : null
                    }
                  />
                </HomeLink>
              ))
            : null}
        </Wrapper>
      </Content>
      <Content>
        <Title>
          Movies - crew {credits.crew ? `(${credits.crew.length})` : null}
        </Title>
        <Wrapper>
          {credits.crew
            ? credits.crew.map((personCrew) => (
                <HomeLink
                  to={`/movie/${personCrew.id}`}
                  key={personCrew.id}
                  onClick={() => handleMovieClickHandler(personCrew.id)}
                >
                  <MovieTile
                    title={personCrew.title ? personCrew.title : null}
                    posterPath={
                      personCrew.poster_path
                        ? `${basicImageUrl}${personCrew.poster_path}`
                        : blankPoster
                    }
                    releaseDate={
                      personCrew.release_date
                        ? personCrew.release_date.slice(0, 4)
                        : null
                    }
                    voteAverage={
                      personCrew.vote_average ? personCrew.vote_average : null
                    }
                    voteCount={
                      personCrew.vote_count ? personCrew.vote_count : "No"
                    }
                    genre_ids={
                      personCrew.genre_ids
                        ? personCrew.genre_ids.slice(0, 2)
                        : null
                    }
                  />
                </HomeLink>
              ))
            : null}
        </Wrapper>
      </Content>
    </>
  );
};
