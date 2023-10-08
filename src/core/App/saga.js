import { all } from "redux-saga/effects";
import { watchFetchMovies } from "../../sagas/movieSaga";
import { watchFetchPeople } from "../../sagas/peopleSaga";

export default function* saga() {
  yield all([watchFetchMovies(), watchFetchPeople()]);
}
