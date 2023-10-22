import { call, put, takeLatest, select, delay } from "redux-saga/effects";
import {
  fetchPersonDetailsRequest,
  fetchPersonDetailsSuccess,
  fetchPersonDetailsFailure,
} from "../slices/personDetailSlice";
import axios from "axios";
import { selectPersonId } from "../slices/peopleSlice";
import { personDetailsApiUrl, apiKey } from "../common/apiURLs";

function* fetchPeopleDetails() {
  try {
    yield delay(500);
    const selectedPersonId = yield select(selectPersonId);
    if (selectedPersonId) {
      const apiUrl = personDetailsApiUrl(selectedPersonId, apiKey);
      const response = yield call(axios.get, apiUrl);
      yield put(fetchPersonDetailsSuccess(response.data));
    }
  } catch (error) {
    yield put(fetchPersonDetailsFailure(error));
  }
}

export function* watchFetchPersonDetails() {
  yield takeLatest(fetchPersonDetailsRequest.type, fetchPeopleDetails);
}
