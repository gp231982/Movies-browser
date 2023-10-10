import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Content, SectionTile, Wrapper } from "./styled";
import {
  fetchMovieRequest,
  selectError,
  selectLoading,
  selectMovie,
} from "../../slices/movieSlice";
import { MovieTile } from "../../common/MovieTile";
import { Pagination } from "../../common/Pagination";
import { Error } from "../../common/States/Error";

const basicImageUrl = `https://image.tmdb.org/t/p/w500`;

export const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovie);
  console.log(movies);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchMovieRequest());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Content>
      <SectionTile>Popular movies</SectionTile>
      <Wrapper>
        {movies.map((movie) => (
          <MovieTile
            key={movie.id}
            title={movie.title}
            posterPath={`${basicImageUrl}${movie.poster_path}`}
            releaseDate={movie.release_date.slice(0, 4)}
            voteAverage={movie.vote_average}
            voteCount={movie.vote_count}
            genre_ids={movie.genre_ids.slice(0, 2)}
          />
        ))}
      </Wrapper>
      <Pagination />
    </Content>
  );
};
