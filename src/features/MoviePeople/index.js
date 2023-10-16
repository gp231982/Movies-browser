import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPeopleRequest,
  selectPeopleByQuery,
} from "../../slices/peopleSlice";
import {
  selectData,
  selectLoading,
  selectError,
} from "../../slices/peopleSlice";

import { MoviePeopleWrapper, TilesWrapper } from "./styled";
import Header from "./Header";
import PersonTile from "../../common/PersonTile";
import { SectionTile } from "../MovieList/styled";
import { Pagination } from "../../common/Pagination";
import { Loading } from "../../common/States/Loading";
import { Error } from "../../common/States/Error";

import { useQueryParameter } from "../../common/queryParameters";
import searchQueryParamName from "../../common/searchQueryParamName";

const MoviePeople = ({ headerName }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const query = useQueryParameter(searchQueryParamName);

  const people = useSelector((state) => selectPeopleByQuery(state, query));

  useEffect(() => {
    dispatch(fetchPeopleRequest());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

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
