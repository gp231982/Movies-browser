import { call, put, takeLatest, select } from "redux-saga/effects";
import {
  fetchCreditsRequest,
  fetchCreditsSuccess,
  fetchCreditsFailure,
} from "../slices/creditsSlice";
import axios from "axios";
import { creditsApiUrl } from "../common/apiURLs";
import { selectMovieId } from "../slices/movieSlice";
import { apiKey } from "../common/apiURLs";

// Saga do pobierania danych credits
function* fetchCredits() {
  try {
    const selectedMovieId = yield select(selectMovieId);
    yield console.log(selectedMovieId);
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
