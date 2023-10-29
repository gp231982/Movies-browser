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
  selectDetailsError,
  selectDetailsLoading,
} from "../../slices/movieDetailSlice";
import { basicImageUrl } from "../MovieList";
import blankPoster from "../MovieDetails/BlankMoviePoster.png";
import { handlePeopleClick } from "../../slices/peopleSlice";
import { HomeLink } from "../../common/Header/styled";
import { useNavigate } from "react-router-dom";
import { useQueryParameter } from "../../common/queryParameters";
import searchQueryParamName from "../../common/searchQueryParamName";

const baseURL = "https://image.tmdb.org/t/p/";
const bigPosterSize = "original";

const MovieDetails = () => {
  const query = useQueryParameter(searchQueryParamName);
  const navigate = useNavigate();
  const selectedMovieId = useSelector(selectMovieId);
  const dispatch = useDispatch();
  const credits = useSelector(selectData);
  const loadingDetails = useSelector(selectDetailsLoading);
  const loadingCredits = useSelector(selectLoading);
  const errorCredits = useSelector(selectError);
  const errorDetails = useSelector(selectDetailsError);
  const details = useSelector(selectDetailsData);

  useEffect(() => {
    let timer;
    if (query) {
      timer = setTimeout(() => {
        navigate(`/movies?page=1&${searchQueryParamName}=${query}`);
      }, 500);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [query, navigate]);

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

  const handlePeopleClickHandler = (movieId) => {
    dispatch(handlePeopleClick(movieId));
  };

  if (loadingCredits && loadingDetails) {
    return <Loading />;
  }

  if (errorCredits && errorDetails) {
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
                {details.vote_average
                  ? details.vote_average.toFixed(1).toString().replace(".", ",")
                  : null}
              </BackgroundValue>
            </BackgroundRating>
            <BackgroundVotes>
              {details.vote_count ? details.vote_count : "No"} votes
            </BackgroundVotes>
          </MainInfo>
        </BigPoster>
      </StyledMoviePage>

      <Tile>
        <Picture
          src={
            details.poster_path
              ? `${basicImageUrl}${details.poster_path}`
              : blankPoster
          }
          alt="Movie poster"
        />
        <Main>
          <Title>{details.title ? details.title : "No title"}</Title>
          <Year>
            {details.release_date
              ? details.release_date.slice(0, 4)
              : "No data available"}
          </Year>
          <ProductionAndRelease>
            <ProductionBox>
              <Production>Production:</Production>
              {details.production_countries
                ? details.production_countries.map((country) => (
                    <ProductionData key={country.name}>
                      {country.name},{" "}
                    </ProductionData>
                  ))
                : "No data available"}
            </ProductionBox>
            <ReleaseBox>
              <Release>Release date:</Release>
              <ReleaseData>
                {details.release_date
                  ? `${details.release_date.slice(
                      8,
                      10
                    )}.${details.release_date.slice(
                      5,
                      7
                    )}.${details.release_date.slice(0, 4)}`
                  : "No data available"}
              </ReleaseData>
            </ReleaseBox>
          </ProductionAndRelease>
          <Genres>
            {details.genres
              ? details.genres
                  .slice(0, 2)
                  .map((genre) => <Genre key={genre.name}>{genre.name}</Genre>)
              : null}
          </Genres>
          <Rating>
            <RateIcon />
            <Rate>
              {details.vote_average
                ? details.vote_average.toFixed(1).toString().replace(".", ",")
                : null}
            </Rate>
            <Votes>
              {details.vote_count ? details.vote_count : "No"} votes
            </Votes>
          </Rating>
          <Description>
            {details.overview ? details.overview : "No data available"}
          </Description>
        </Main>
      </Tile>

      <MoviePeopleWrapper>
        <SectionTile>
          Cast {credits.cast ? `(${credits.cast.length})` : null}
        </SectionTile>
        <TilesWrapper>
          {credits.cast && Array.isArray(credits.cast) ? (
            credits.cast.map((person) => (
              <HomeLink
                onClick={() => handlePeopleClickHandler(person.id)}
                to={`/person/${person.id}`}
                key={person.id}
              >
                <PersonTile
                  key={person.id}
                  posterImage={
                    person.profile_path &&
                    `https://image.tmdb.org/t/p/w500${person.profile_path}`
                  }
                  personName={person.name}
                  characterName={person.character}
                />
              </HomeLink>
            ))
          ) : (
            <div>No cast information available</div>
          )}
        </TilesWrapper>
        <SectionTile>
          Crew {credits.crew ? `(${credits.crew.length})` : null}
        </SectionTile>
        <TilesWrapper>
          {credits.crew && Array.isArray(credits.crew) ? (
            credits.crew.map((person) => (
              <HomeLink
                onClick={() => handlePeopleClickHandler(person.id)}
                to={`/person/${person.id}`}
                key={person.id}
              >
                <PersonTile
                  key={person.id}
                  posterImage={
                    person.profile_path &&
                    `https://image.tmdb.org/t/p/w500${person.profile_path}`
                  }
                  personName={person.name}
                  job={person.job}
                />
              </HomeLink>
            ))
          ) : (
            <div>No crew information available</div>
          )}
        </TilesWrapper>
      </MoviePeopleWrapper>
    </>
  );
};

export default MovieDetails;
