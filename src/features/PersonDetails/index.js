import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CastPerson,
  CrewPerson,
  MovieList,
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
import { basicImageUrl } from "../MovieList/index";

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
    <StyledPersonDetails>
      <>{details.biography}</>
      <CastPerson>
        <Title>Movies - cast</Title>
        <MovieList>
          {/* {credits.cast.map((personCast) => ( */}
            <MovieTile
              // key={personCast.id}
              // title={personCast.title}
              // posterPath={`${basicImageUrl}${personCast.poster_path}`}
              // releaseDate={personCast.release_date.slice(0, 4)}
              // voteAverage={personCast.vote_average}
              // voteCount={personCast.vote_count}
              // genre_ids={personCast.genre_ids}
            />
          {/* //  ))} */}
        </MovieList>
      </CastPerson>
      <CrewPerson>
        <Title>Movies - crew</Title>
        <MovieList>
          {/* {credits.crew.map((personCrew) => ( */}
            <MovieTile
              // key={personCrew.id}
              // title={personCrew.title}
              // posterPath={`${basicImageUrl}${personCrew.poster_path}`}
              // releaseDate={personCrew.release_date.slice(0, 4)}
              // voteAverage={personCrew.vote_average}
              // voteCount={personCrew.vote_count}
              // genre_ids={personCrew.genre_ids.slice(0, 2)}
            />
          {/* ))} */}
        </MovieList>
      </CrewPerson>
    </StyledPersonDetails>
  );
};
