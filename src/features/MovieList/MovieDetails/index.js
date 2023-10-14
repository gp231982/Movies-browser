import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectData,
  selectLoading,
  selectError,
} from "../../../slices/creditsSlice";

import { useParams } from "react-router-dom";

import { fetchCreditsRequest } from "../../../slices/creditsSlice";
import { MoviePeopleWrapper, TilesWrapper } from "../MoviePeople/styled";
import { selectMovie, selectMovieId } from "../../../slices/movieSlice";
import { Pagination } from "../../../common/Pagination";
import { SectionTile } from "../MainContent/styled";
import Header from "../MoviePeople/Header";
import headerName from "../MoviePeople/Header";
import PersonTile from "../../../common/PersonTile";
import BlankPicture from "../../../common/PersonTile/BlankPicture.png";

const MovieDetails = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const selectedMovieId = useSelector(selectMovieId);
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
    // If data is not available or `credits.cast` is not an array, render a message or fallback UI
    // return <div>No cast information available.</div>;
    return
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
