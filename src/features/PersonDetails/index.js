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
import blankPicture from "../../common/PersonTile/BlankPicture.png";
import { handleMovieClick } from "../../slices/movieSlice";
import { HomeLink } from "../../common/Header/styled";
import { useNavigate } from "react-router-dom";
import { useQueryParameter } from "../../common/queryParameters";
import searchQueryParamName from "../../common/searchQueryParamName";

export const PersonDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedPersonId = useSelector(selectPersonId);
  const credits = useSelector(selectData);
  const loadingDetails = useSelector(selectPersonLoading);
  const loadingCredits = useSelector(selectLoading);
  const errorDetails = useSelector(selectPersonError);
  const errorCredits = useSelector(selectError);
  const details = useSelector(selectPersonDetails);
  const query = useQueryParameter(searchQueryParamName);
  console.log(credits);

  useEffect(() => {
    let timer;
    if (query) {
      timer = setTimeout(() => {
        navigate(`/people?page=1&${searchQueryParamName}=${query}`);
      }, 500);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [query, navigate]);

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
              details.profile_path
                ? `${basicImageUrl}${details.profile_path}`
                : blankPicture
            }
            alt="Person poster"
          />
          <MainInfo>
            <PersonTitle>
              {details.name ? details.name : "No data available"}
            </PersonTitle>
            <PersonBirthDetails>
              <DateLabel>Date of birth:</DateLabel>
              <DateLabel data-mobile data-none>
                Birth:
              </DateLabel>
              <PersonBirthData>
                {details.birthday
                  ? `${details.birthday.slice(8, 10)}.${details.birthday.slice(
                      5,
                      7
                    )}.${details.birthday.slice(0, 4)}`
                  : "No data available"}
              </PersonBirthData>
            </PersonBirthDetails>
            <PersonBirthDetails data-mobile>
              <PlaceLabel>Place of birth:</PlaceLabel>
              <PersonBirthData>
                {details.place_of_birth
                  ? details.place_of_birth
                  : "No data available"}
              </PersonBirthData>
            </PersonBirthDetails>
          </MainInfo>
          <Biography>
            {details.biography ? details.biography : "No data available"}
          </Biography>
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
                    key={personCast.id}
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
                    key={personCrew.id}
                  />
                </HomeLink>
              ))
            : null}
        </Wrapper>
      </Content>
    </>
  );
};
