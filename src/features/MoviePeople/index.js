import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
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
import { HomeLink } from "../../common/Header/styled";
import SectionTileContent from "../../common/States/SectionTileContent";
import { usePagination } from "../../common/Pagination/usePagination";
import BlankPicture from "../../common/PersonTile/BlankPicture.png";

const MoviePeople = () => {
  const pagination = usePagination();
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
    if (page !== 1 && query) {
      pagination.setFirstPage();  
    }
    dispatch(fetchPeopleRequest());
  }, [query]);

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
        <SectionTile>
          <SectionTileContent query={query} people={people} />
        </SectionTile>
        <TilesWrapper>
          {visiblePeople.slice(0, 24).map((person) => (
            <HomeLink
              to={`/person/${person.id}`}
              onClick={() => handlePeopleClickHandler(person.id)}
              key={person.id}
            >   
              <PersonTile
                key={person.id}
                posterImage={person.profile_path ? `https://www.themoviedb.org/t/p/w185_and_h278_bestv2${person.profile_path}`: BlankPicture}
                personName={person.name}
              />
            </HomeLink>
          ))}
        </TilesWrapper>
      </MoviePeopleWrapper>
      <Pagination />
    </>
  );
};

export default MoviePeople; 
