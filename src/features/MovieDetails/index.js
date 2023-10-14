import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectData,
  selectLoading,
  selectError,
} from "../../slices/creditsSlice";

import { useParams } from "react-router-dom";

import { fetchCreditsRequest } from "../../slices/creditsSlice";
import { MoviePeopleWrapper, TilesWrapper } from "../MoviePeople/styled";
import { selectMovie, selectMovieId } from "../../slices/movieSlice";
import { Pagination } from "../../common/Pagination";
import { SectionTile } from "../MovieList/styled";
import Header from "../MoviePeople/Header";
import headerName from "../MoviePeople/Header";
import PersonTile from "../../common/PersonTile";

const MovieDetails = () => {
  const selectedMovieId = useParams();
  // const selectedMovieId = useSelector(selectMovieId);
  console.log(selectedMovieId);
  const dispatch = useDispatch();

  const credits = useSelector(selectData);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    console.log(selectedMovieId);
    // Pobieraj dane osób z credits przy użyciu akcji `fetchCreditsRequest`
    if (selectedMovieId) {
      dispatch(fetchCreditsRequest(selectedMovieId));
    }
  }, [dispatch, selectedMovieId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!credits || !Array.isArray(credits.cast)) {
    return;
  }

  return (
    <>
      <MoviePeopleWrapper>
        <SectionTile>Cast</SectionTile>
        <TilesWrapper>
          {credits.cast.map((person) => (
            <PersonTile
              key={person.id}
              posterImage={
                person.profile_path &&
                `https://image.tmdb.org/t/p/w500${person.profile_path}`
              }
              personName={person.name}
              characterName={person.character}
            />
          ))}
        </TilesWrapper>
        <SectionTile>Crew</SectionTile>
        <TilesWrapper>
          {credits.crew.map((person) => (
            <PersonTile
              key={person.id}
              posterImage={
                person.profile_path &&
                `https://image.tmdb.org/t/p/w500${person.profile_path}`
              }
              personName={person.name}
              job={person.job}
            />
          ))}
        </TilesWrapper>
      </MoviePeopleWrapper>
      <Pagination />
    </>
  );
};

export default MovieDetails;
