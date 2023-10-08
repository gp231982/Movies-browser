import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchMovieRequest,
  fetchPeopleSuccess,
  fetchPeopleFailure,
} from "../slices/movieSlice";
import axios from "axios";
import { popularMovieApiUrl } from "../common/apiURLs";

function* fetchMovies() {
  try {
    const response = yield call(axios.get, popularMovieApiUrl);
    yield put(fetchPeopleSuccess(response.data.results));
  } catch (error) {
    yield put(fetchPeopleFailure(error));
  }
}

export function* watchFetchMovies() {
  yield takeLatest(fetchMovieRequest.type, fetchMovies);
}
