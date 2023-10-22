import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  fetchPeopleRequest,
  selectPeopleByQuery,
  selectLoading,
  selectError,
  handlePeopleClick,
} from "../../slices/peopleSlice";
import { MoviePeopleWrapper, TilesWrapper } from "./styled";
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
  const location = useLocation();
  const query = useQueryParameter(searchQueryParamName);
  const people = useSelector((state) => selectPeopleByQuery(state, query));
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get("page");
  const itemsPerPage = 24;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visiblePeople = people.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(fetchPeopleRequest());
  }, [dispatch, page]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const handlePeopleClickHandler = (personId) => {
    dispatch(handlePeopleClick(personId));
  };

  return (
    <>
      <MoviePeopleWrapper>
        <SectionTile>Popular people</SectionTile>
        <TilesWrapper>
          {visiblePeople.slice(0, 24).map((person) => (
            <Link
              to={`/person/${person.id}`}
              onClick={() => handlePeopleClickHandler(person.id)}
            >
              <PersonTile
                posterImage={`https://www.themoviedb.org/t/p/w185_and_h278_bestv2${person.profile_path}`}
                personName={person.name}
              />
            </Link>
          ))}
        </TilesWrapper>
      </MoviePeopleWrapper>
      <Pagination />
    </>
  );
};

export default MoviePeople;
