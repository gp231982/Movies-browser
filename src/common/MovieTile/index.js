import {
  MovieWrapper,
  Picture,
  Tile,
  Date,
  Rating,
  Rate,
  Votes,
  Description,
  RateIconBox,
} from "./styled";
import { Genres } from "../Genres";
import { Genre } from "../Genre";
import { ReactComponent as RateIcon } from "./rate.svg";
import { useSelector } from "react-redux";
import { selectGenre } from "../../slices/movieSlice";

export const MovieTile = ({
  title,
  releaseDate,
  voteAverage,
  voteCount,
  posterPath,
  id,
  genre_ids,
}) => {
  const genres = useSelector(selectGenre);
  return (
    <MovieWrapper key={id}>
      <Picture src={posterPath} />
      <Description>
        <Tile>{title}</Tile>
        <Date>{releaseDate}</Date>
        <Genres>
          {Array.isArray(genre_ids)
            ? genre_ids.map((genreId) => {
                const genre = genres.find((g) => g.id === genreId);
                return <Genre key={genreId}>{genre ? genre.name : null}</Genre>;
              })
            : null}
        </Genres>
      </Description>
      <Rating>
        <RateIconBox>
          <RateIcon />
        </RateIconBox>
        <Rate>{voteAverage}</Rate>
        <Votes>{voteCount} votes</Votes>
      </Rating>
    </MovieWrapper>
  );
};
