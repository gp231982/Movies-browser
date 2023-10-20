import { call, put, takeLatest, select, delay } from "redux-saga/effects";
import {
  fetchCreditsRequest,
  fetchCreditsSuccess,
  fetchCreditsFailure,
} from "../slices/creditsSlice";
import axios from "axios";
import { selectMovieId } from "../slices/movieSlice";
import { creditsApiUrl, apiKey } from "../common/apiURLs";

function* fetchCredits() {
  try {
    yield delay(500);
    const selectedMovieId = yield select(selectMovieId);
    if (selectedMovieId) {
      const apiUrl = creditsApiUrl(selectedMovieId, apiKey);
      const response = yield call(axios.get, apiUrl);
      yield put(fetchCreditsSuccess(response.data));
    }
  } catch (error) {
    yield put(fetchCreditsFailure(error));
  }
}
export function* watchFetchCredits() {
  yield takeLatest(fetchCreditsRequest.type, fetchCredits);
}
