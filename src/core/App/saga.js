import { all } from "redux-saga/effects";
import { watchFetchMovies } from "../../sagas/movieSaga";
import { watchFetchPeople } from "../../sagas/peopleSaga";
import { watchFetchCredits } from "../../sagas/creditsSaga";

export default function* saga() {
  yield all([watchFetchMovies(), watchFetchPeople(), watchFetchCredits()]);
}
  