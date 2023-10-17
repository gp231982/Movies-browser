import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectData,
  selectLoading,
  selectError,
} from "../../slices/creditsSlice";
import { Genre } from "../../common/Genre";
import { Genres } from "../../common/Genres";
import {
  Tile,
  Picture,
  Information,
  Title,
  Year,
  ProductionAndRelease,
  ProductionBox,
  Production,
  ProductionData,
  ReleaseBox,
  Release,
  ReleaseData,
  Description,
  Rating,
  Rate,
  TotalRate,
  Votes,
} from "./styled";
import { ReactComponent as RateIcon } from "../../common/MovieTile/rate.svg";
import { fetchCreditsRequest } from "../../slices/creditsSlice";
import { MoviePeopleWrapper, TilesWrapper } from "../MoviePeople/styled";
import { selectMovieId } from "../../slices/movieSlice";
import { Pagination } from "../../common/Pagination";
import { SectionTile } from "../MovieList/styled";
import PersonTile from "../../common/PersonTile";
import { Loading } from "../../common/States/Loading";
import { Error } from "../../common/States/Error";
import {
  fetchMovieDetailsRequest,
  selectDetailsData,
} from "../../slices/movieDetailSlice";
import { basicImageUrl } from "../MovieList";
import {
  StyledMoviePage,
  BigPoster,
  MainInfo,
  Raiting,
  Value,
  SmallerValue,
} from "../MovieList/MoviePage/styled";
import blankPoster from "../MovieDetails/BlankMoviePoster.png";
const baseURL = "https://image.tmdb.org/t/p/";
const bigPosterSize = "original";

const MovieDetails = () => {
  const selectedMovieId = useSelector(selectMovieId);
  const dispatch = useDispatch();
  const credits = useSelector(selectData);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const details = useSelector(selectDetailsData);

  useEffect(() => {
    if (selectedMovieId) {
      dispatch(fetchCreditsRequest(selectedMovieId));
      dispatch(fetchMovieDetailsRequest(selectedMovieId));
    }
  }, [dispatch, selectedMovieId]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  if (!credits || !Array.isArray(credits.cast)) {
    return;
  }

  return (
    <>
      <StyledMoviePage>
        <BigPoster>
          <img
            src={
              details.backdrop_path
                ? `${baseURL}${bigPosterSize}${details.backdrop_path}`
                : blankPoster
            }
            alt="bigMoviePoster"
          />
          <MainInfo>
            <Title>{details.title ? details.title : null}</Title>
            <Raiting>
            <RateIcon />
              <Value>
                {details.vote_average ? details.vote_average.toFixed(1) : null}
                <SmallerValue> /10</SmallerValue>
              </Value>
            </Raiting>
            <Votes>
              {details.vote_count ? details.vote_count : null} votes
            </Votes>
          </MainInfo>
        </BigPoster>
      </StyledMoviePage>

      <Tile>
        <Picture src={`${basicImageUrl}${details.poster_path}`} />
        <Information>
          <Title>{details.title}</Title>
          <Year>{details.release_date}</Year>
          <ProductionAndRelease>
            <ProductionBox>
              <Production>Production:</Production>
              {details.production_countries.map((production) => (
                <ProductionData>{production.name}</ProductionData>
              ))}
            </ProductionBox>
            <ReleaseBox>
              <Release>Release date:</Release>
              <ReleaseData>{details.release_date}</ReleaseData>
            </ReleaseBox>
          </ProductionAndRelease>
          <Rating>
            <RateIcon />
            <Rate>{details.vote_average}</Rate>
            <TotalRate>/ 10</TotalRate>
            <Votes>{details.vote_count} votes</Votes>
          </Rating>
          <Genres>
            {details.genres.map((genre) => (
              <Genre>{genre.name}</Genre>
            ))}
          </Genres>
          <Description>{details.overview}</Description>
        </Information>
      </Tile>

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
