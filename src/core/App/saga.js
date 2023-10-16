import { all } from "redux-saga/effects";
import { watchFetchMovies } from "../../sagas/movieSaga";
import { watchFetchPeople } from "../../sagas/peopleSaga";
import { watchFetchCredits } from "../../sagas/creditsSaga";
import { watchFetchMovieDetails } from "../../sagas/movieDetailSaga";

export default function* saga() {
  yield all([
    watchFetchMovies(),
    watchFetchPeople(),
    watchFetchCredits(),
    watchFetchMovieDetails(),
  ]);
}
