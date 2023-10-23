import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Genre } from "../../common/Genre";
import { Genres } from "../../common/Genres";

import {
  StyledMoviePage,
  BigPoster,
  MainInfo,
  BackgroundTitle,
  BackgroundRating,
  BackgroundStar,
  BackgroundValue,
  BackgorundSmallerValue,
  BackgroundVotes,
  Tile,
  Picture,
  Main,
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
  RateIcon,
} from "./styled";
import {
  fetchCreditsRequest,
  selectData,
  selectLoading,
  selectError,
} from "../../slices/creditsSlice";
import { MoviePeopleWrapper, TilesWrapper } from "../MoviePeople/styled";
import { handleMovieClick, selectMovieId } from "../../slices/movieSlice";
import { SectionTile } from "../MovieList/styled";
import PersonTile from "../../common/PersonTile";
import { Loading } from "../../common/States/Loading";
import { Error } from "../../common/States/Error";
import {
  fetchMovieDetailsRequest,
  selectDetailsData,
} from "../../slices/movieDetailSlice";
import { basicImageUrl } from "../MovieList";
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
      localStorage.setItem("selectedMovieId", JSON.stringify(selectedMovieId));
    }
  }, [dispatch, selectedMovieId]);

  useEffect(() => {
    const storedMovieId = localStorage.getItem("selectedMovieId");
    if (storedMovieId) {
      dispatch(handleMovieClick(JSON.parse(storedMovieId)));
    }
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  if (!credits || !Array.isArray(credits.cast)) {
    return;
  }

  if (!details) {
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
            <BackgroundTitle>
              {details.title ? details.title : null}
            </BackgroundTitle>
            <BackgroundRating>
              <BackgroundStar>
                <RateIcon />
              </BackgroundStar>
              <BackgroundValue>
                {details.vote_average ? details.vote_average.toFixed(1) : null}
                <BackgorundSmallerValue> /10</BackgorundSmallerValue>
              </BackgroundValue>
            </BackgroundRating>
            <BackgroundVotes>
              {details.vote_count ? details.vote_count : null} votes
            </BackgroundVotes>
          </MainInfo>
        </BigPoster>

        <Tile>
          <Picture src={
            details.poster_path
              ? `${basicImageUrl}${details.poster_path}`
              : blankPoster} />
          <Main>
            <Title>{details.title ? details.title : null}</Title>
            <Year>
              {details.release_date ? details.release_date.slice(0, 4) : null}
            </Year>
            <ProductionAndRelease>
              <ProductionBox>
                <Production>Production:</Production>
                {details.production_countries
                  ? details.production_countries.map((country) => (
                    <ProductionData key={country.name}>{country.name}, </ProductionData>
                  ))
                  : null}
              </ProductionBox>
              <ReleaseBox>
                <Release>Release date:</Release>
                <ReleaseData>
                  {details.release_date
                    ? `${details.release_date.slice(8, 10)}.${details.release_date.slice(5, 7)}.${details.release_date.slice(0, 4)}`
                    : null}
                </ReleaseData>
              </ReleaseBox>
            </ProductionAndRelease>
            <Genres>
              {details.genres ? details.genres.map((genre) => (
                <Genre key={genre.name}>{genre.name}</Genre>
              ))
                : null}
            </Genres>
            <Rating>
              <RateIcon />
              <Rate>
                {details.vote_average ? details.vote_average.toFixed(1) : null}
              </Rate>
              <TotalRate>/ 10</TotalRate>
              <Votes>
                {details.vote_count ? details.vote_count : null} votes
              </Votes>
            </Rating>
            <Description>
              {details.overview ? details.overview : null}
            </Description>
          </Main>
        </Tile>

        <MoviePeopleWrapper>
          <SectionTile>Cast</SectionTile>
          <TilesWrapper>
            {credits.cast && Array.isArray(credits.cast) ? (
              credits.cast.map((person) => (
                <PersonTile
                  key={person.id}
                  posterImage={
                    person.profile_path &&
                    `https://image.tmdb.org/t/p/w500${person.profile_path}`
                  }
                  personName={person.name}
                  characterName={person.character}
                />
              ))
            ) : (
              <div>No cast information available</div>
            )}
          </TilesWrapper>
          <SectionTile>Crew</SectionTile>
          <TilesWrapper>
            {credits.crew && Array.isArray(credits.crew) ? (
              credits.crew.map((person) => (
                <PersonTile
                  key={person.id}
                  posterImage={
                    person.profile_path &&
                    `https://image.tmdb.org/t/p/w500${person.profile_path}`
                  }
                  personName={person.name}
                  job={person.job}
                />
              ))
            ) : (
              <div>No crew information available</div>
            )}
          </TilesWrapper>
        </MoviePeopleWrapper>
      </StyledMoviePage>
    </>
  );
};

export default MovieDetails;
