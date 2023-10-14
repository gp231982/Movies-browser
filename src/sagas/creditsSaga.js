import { call, put, takeLatest, select, delay } from "redux-saga/effects";
import {
  fetchCreditsRequest,
  fetchCreditsSuccess,
  fetchCreditsFailure,
} from "../slices/creditsSlice";
import axios from "axios";
import { selectMovieId } from "../slices/movieSlice";
import { apiKey } from "../common/apiURLs";

// Saga do pobierania danych credits
function* fetchCredits() {
  try {
    yield delay(500);
    const selectedMovieId = yield select(selectMovieId);
    if (selectedMovieId) {
      const apiUrl = `https://api.themoviedb.org/3/movie/${selectedMovieId}/credits?language=en-US&api_key=${apiKey}`;
      // const apiUrl = `https://api.themoviedb.org/3/movie/:movieId/credits?language=en-US&api_key=${apiKey}`;
      const response = yield call(axios.get, apiUrl);
      yield put(fetchCreditsSuccess(response.data));
      console.log(response.data);
    }
  } catch (error) {
    yield put(fetchCreditsFailure(error));
  }
}

// Włącz sagę na żądanie fetchCreditsRequest
export function* watchFetchCredits() {
  yield takeLatest(fetchCreditsRequest.type, fetchCredits);
}
