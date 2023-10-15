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

const MovieDetails = () => {
  const selectedMovieId = useSelector(selectMovieId);
  console.log(selectedMovieId);
  const dispatch = useDispatch();

  const credits = useSelector(selectData);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    console.log(selectedMovieId);
    if (selectedMovieId) {
      dispatch(fetchCreditsRequest(selectedMovieId));
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
      <Tile>
        <Picture />
        <Information>
          <Title>Mulan</Title>
          <Year>2023</Year>
          <ProductionAndRelease>
            <ProductionBox>
              <Production>Production:</Production>
              <ProductionData>China, United States of America</ProductionData>
            </ProductionBox>
            <ReleaseBox>
              <Release>Release date:</Release>
              <ReleaseData>24.10.2023</ReleaseData>
            </ReleaseBox>
          </ProductionAndRelease>
          <Rating>
            <RateIcon />
            <Rate>9</Rate>
            <TotalRate>/ 10</TotalRate>
            <Votes>500 votes</Votes>
          </Rating>
          <Genres>
            <Genre>Horror</Genre>
            <Genre>Horror</Genre>
            <Genre>Horror</Genre>
          </Genres>
          <Description>
            A young Chinese maiden disguises herself as a male warrior in order
            to save her father. Disguises herself as a male warrior in order to
            save her father. A young Chinese maiden disguises herself as a male
            warrior in order to save her father.
          </Description>
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
