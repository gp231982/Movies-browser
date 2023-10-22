import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Content, SectionTile, StyledLink, Wrapper } from "./styled";
import { useLocation } from "react-router-dom";
import {
  fetchMovieRequest,
  selectError,
  selectLoading,
  selectMoviesByQuery,
} from "../../slices/movieSlice";
import { MovieTile } from "../../common/MovieTile";
import { handleMovieClick } from "../../slices/movieSlice";
import { Pagination } from "../../common/Pagination";
import { Loading } from "../../common/States/Loading";
import { Error } from "../../common/States/Error";
import { useQueryParameter } from "../../common/queryParameters";
import searchQueryParamName from "../../common/searchQueryParamName";

export const basicImageUrl = `https://image.tmdb.org/t/p/w500`;

export const MovieList = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const query = useQueryParameter(searchQueryParamName);
  const movies = useSelector((state) => selectMoviesByQuery(state, query));
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get("page");
  const itemsPerPage = 16;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleMovies = movies.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(fetchMovieRequest());
  }, [dispatch, page]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const handleMovieClickHandler = (movieId) => {
    dispatch(handleMovieClick(movieId));
  };

  return (
    <Content>
      <SectionTile>Popular movies</SectionTile>
      <Wrapper>
        {visibleMovies.map((movie) => (
          <StyledLink
            to={`/movie/${movie.id}`}
            key={movie.id}
            onClick={() => handleMovieClickHandler(movie.id)}
          >
            <MovieTile
              title={movie.title}
              posterPath={`${basicImageUrl}${movie.poster_path}`}
              releaseDate={movie.release_date.slice(0, 4)}
              voteAverage={movie.vote_average}
              voteCount={movie.vote_count}
              genre_ids={movie.genre_ids.slice(0, 2)}
            />
          </StyledLink>
        ))}
      </Wrapper>
      <Pagination />
    </Content>
  );
};
