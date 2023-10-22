import { call, put, takeLatest, select, delay } from "redux-saga/effects";
import {
  fetchPersonCreditsRequest,
  fetchPersonCreditsSuccess,
  fetchPersonCreditsFailure,
} from "../slices/personCreditsSlice";
import axios from "axios";
import { selectPersonId } from "../slices/peopleSlice";
import { personCreditsApiUrl, apiKey } from "../common/apiURLs";

function* fetchPersonCredits() {
  try {
    yield delay(500);
    const selectedPersonId = yield select(selectPersonId);
    if (selectedPersonId) {
      const apiUrl = personCreditsApiUrl(selectedPersonId, apiKey);
      const response = yield call(axios.get, apiUrl);
      yield put(fetchPersonCreditsSuccess(response.data));
    }
  } catch (error) {
    yield put(fetchPersonCreditsFailure(error));
  }
}
export function* watchFetchPersonCredits() {
  yield takeLatest(fetchPersonCreditsRequest.type, fetchPersonCredits);
}
