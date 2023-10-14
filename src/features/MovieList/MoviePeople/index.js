import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeopleRequest } from "../../../slices/peopleSlice";
import {
  selectData,
  selectLoading,
  selectError,
} from "../../../slices/peopleSlice";

import { MoviePeopleWrapper, TilesWrapper } from "./styled";
import Header from "./Header";
import PersonTile from "../../../common/PersonTile";
import { SectionTile } from "../MainContent/styled";
import { Pagination } from "../../../common/Pagination";

const MoviePeople = ({ headerName }) => {
  const dispatch = useDispatch();
  const people = useSelector(selectData);
  console.log(people);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchPeopleRequest());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(people.length)

  return (
    <>
      <MoviePeopleWrapper>
        <SectionTile>Popular people</SectionTile>
        <Header content={headerName} />
        <TilesWrapper>
          {people.slice(0,24).map((person) => (
            <PersonTile
              posterImage={`https://www.themoviedb.org/t/p/w185_and_h278_bestv2${person.profile_path}`}
              personName={person.name}
            />
          ))}
        </TilesWrapper>
      </MoviePeopleWrapper>
      <Pagination />
    </>
  );
};

export default MoviePeople;
