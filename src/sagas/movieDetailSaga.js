import { call, put, takeLatest, select, delay } from "redux-saga/effects";
import {
  fetchMovieDetailsRequest,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsFailure,
} from "../slices/movieDetailSlice";
import axios from "axios";
import { selectMovieId } from "../slices/movieSlice";
import { movieDetailsApiUrl, apiKey } from "../common/apiURLs";

function* fetchMovieDetails() {
  try {
    yield delay(500);
    const selectedMovieId = yield select(selectMovieId);
    if (selectedMovieId) {
      const apiUrl = movieDetailsApiUrl(selectedMovieId, apiKey);
      const response = yield call(axios.get, apiUrl);
      yield put(fetchMovieDetailsSuccess(response.data));
    }
  } catch (error) {
    yield put(fetchMovieDetailsFailure(error));
  }
}

export function* watchFetchMovieDetails() {
  yield takeLatest(fetchMovieDetailsRequest.type, fetchMovieDetails);
}
