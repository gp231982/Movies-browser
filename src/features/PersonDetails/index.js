import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CastPerson,
  CrewPerson,
  MovieList,
  StyledPersonDetails,
  Title,
} from "./styled";
import { MovieTile } from "../../common/MovieTile";
import {
  fetchPersonDetailsRequest,
  selectPersonDetails,
  selectPersonError,
  selectPersonLoading,
} from "../../slices/personDetailSlice";
import {
  fetchPersonCreditsRequest,
  selectData,
} from "../../slices/personCreditsSlice";
import { Loading } from "../../common/States/Loading";
import { Error } from "../../common/States/Error";
import { selectPersonId } from "../../slices/peopleSlice";

export const PersonDetails = () => {
  const selectedPersonId = useSelector(selectPersonId);
  const dispatch = useDispatch();
  const credits = useSelector(selectData);
  const loading = useSelector(selectPersonLoading);
  const error = useSelector(selectPersonError);
  const details = useSelector(selectPersonDetails);
  console.log(credits);
  console.log(details);

  useEffect(() => {
    if (selectedPersonId) {
      dispatch(fetchPersonCreditsRequest(selectedPersonId));
      dispatch(fetchPersonDetailsRequest(selectedPersonId));
    }
  }, [dispatch, selectedPersonId]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <StyledPersonDetails>
        <>{details.biography}</>
        <CastPerson>
          <Title>Movies - cast</Title>
          <MovieList>
            <MovieTile />
          </MovieList>
        </CastPerson>
        <CrewPerson>
          <Title>Movies - crew</Title>
          <MovieList>
            <MovieTile />
          </MovieList>
        </CrewPerson>
      </StyledPersonDetails>
    </>
  );
};
