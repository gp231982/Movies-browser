import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import poster from "./poster.png";
import {
  Content,
  SectionTile,
  Wrapper,
  MovieWrapper,
  Picture,
  Tile,
  Date,
  TypesWrapper,
  Type,
  Rating,
  Information,
  Rate,
  Votes,
} from "./styled";
import { ReactComponent as RateIcon } from "./rate.svg";
import {
  fetchMovieRequest,
  selectError,
  selectLoading,
  selectMovie,
} from "../../../slices/movieSlice";

const basicImageUrl = `https://image.tmdb.org/t/p/w500`;

export const MainContent = () => {
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
    return <div>Error: {error.message}</div>;
  }

  return (
    <Content>
      <SectionTile>Popular movies</SectionTile>
      <Wrapper>
        {movies.map((movie) => (
          <MovieWrapper key={movie.id}>
            <Picture src={`${basicImageUrl}${movie.poster_path}`} />
            <Information>
              <Tile>{movie.title}</Tile>
              <Date>2020</Date>
            </Information>
            <TypesWrapper>
              <Type>Action</Type>
              <Type>Adventure</Type>
              <Type>Drama</Type>
            </TypesWrapper>
            <Rating>
              <RateIcon />
              <Rate>{movie.vote_average}</Rate>
              <Votes>{movie.vote_count}</Votes>
            </Rating>
          </MovieWrapper>
        ))}
      </Wrapper>
    </Content>
  );
};
