import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Biography,
  CastPerson,
  CrewPerson,
  Main,
  MovieList,
  PersonBirthData,
  PersonBirthDetails,
  PersonInfo,
  PersonTile,
  PersonTitle,
  Picture,
  StyledPersonDetails,
  Title,
} from "./styled";
import { MovieTile } from "../../common/MovieTile";
import {
  fetchPersonDetailsRequest,
  selectPersonDetails,
  selectPersonError,
  selectPersonLoading,
} from "../../slices/personDetailSlice";
import {
  fetchPersonCreditsRequest,
  selectData,
} from "../../slices/personCreditsSlice";
import { Loading } from "../../common/States/Loading";
import { Error } from "../../common/States/Error";
import { selectPersonId } from "../../slices/peopleSlice";
import { basicImageUrl } from "../MovieList";

export const PersonDetails = () => {
  const selectedPersonId = useSelector(selectPersonId);
  const dispatch = useDispatch();
  const credits = useSelector(selectData);
  const loading = useSelector(selectPersonLoading);
  const error = useSelector(selectPersonError);
  const details = useSelector(selectPersonDetails);
  console.log(credits);
  console.log(details);

  useEffect(() => {
    if (selectedPersonId) {
      dispatch(fetchPersonCreditsRequest(selectedPersonId));
      dispatch(fetchPersonDetailsRequest(selectedPersonId));
    }
  }, [dispatch, selectedPersonId]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <StyledPersonDetails>
        <PersonTile>
          <Picture src={`${basicImageUrl}${details.profile_path}`} />
          <Main>
            <PersonTitle>{details.name}</PersonTitle>
            <PersonBirthDetails>
              <PersonInfo>
                Date of birth:
                <PersonBirthData>{details.birthday}</PersonBirthData>
              </PersonInfo>
              <PersonInfo>
                Place of birth:
                <PersonBirthData>{details.place_of_birth}</PersonBirthData>
              </PersonInfo>
            </PersonBirthDetails>
            <Biography>{details.biography}</Biography>
          </Main>
        </PersonTile>
        <CastPerson>
          <Title>Movies - cast</Title>
          <MovieList>
            {credits.cast.map((personCast) => (
              <MovieTile
                title={personCast.title}
                posterPath={`${basicImageUrl}${personCast.poster_path}`}
                releaseDate={
                  personCast.release_date
                    ? personCast.release_date.slice(0, 4)
                    : null
                }
                voteAverage={
                  personCast.vote_average ? personCast.vote_average : null
                }
                voteCount={personCast.vote_count ? personCast.vote_count : null}
                genre_ids={
                  personCast.genre_ids ? personCast.genre_ids.slice(0, 2) : null
                }
              />
            ))}
          </MovieList>
        </CastPerson>
        <CrewPerson>
          <Title>Movies - crew</Title>
          <MovieList>
            {credits.crew.map((personCrew) => (
              <MovieTile
                title={personCrew.title}
                posterPath={`${basicImageUrl}${personCrew.poster_path}`}
                releaseDate={
                  personCrew.release_date
                    ? personCrew.release_date.slice(0, 4)
                    : null
                }
                voteAverage={
                  personCrew.vote_average ? personCrew.vote_average : null
                }
                voteCount={personCrew.vote_count ? personCrew.vote_count : null}
                genre_ids={
                  personCrew.genre_ids ? personCrew.genre_ids.slice(0, 2) : null
                }
              />
            ))}
          </MovieList>
        </CrewPerson>
      </StyledPersonDetails>
    </>
  );
};
