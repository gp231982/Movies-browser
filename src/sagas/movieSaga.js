import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchMovieRequest,
  fetchMovieSuccess,
  fetchMovieFailure,
  fetchMovieGenre,
} from "../slices/movieSlice";
import axios from "axios";
import { genresApiUrl, popularMovieApiUrl } from "../common/apiURLs";

function* fetchMovies() {
  try {
    const response = yield call(axios.get, popularMovieApiUrl);
    yield put(fetchMovieSuccess(response.data.results));
  } catch (error) {
    yield put(fetchMovieFailure(error));
  }
}

function* fetchGenres() {
  try {
    const response = yield call(axios.get, genresApiUrl);
    yield put(fetchMovieGenre(response.data.genres));
  } catch (error) {
    yield put(fetchMovieFailure(error));
  }
}

export function* watchFetchMovies() {
  yield takeLatest(fetchMovieRequest.type, fetchMovies);
  yield takeLatest(fetchMovieRequest.type, fetchGenres);
}
