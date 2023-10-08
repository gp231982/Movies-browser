import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchPeopleRequest,
  fetchPeopleSuccess,
  fetchPeopleFailure,
} from "../slices/peopleSlice";
import axios from "axios";
import { popularPeopleApiUrl } from "../common/apiURLs";

function* fetchPeople() {
  try {
    const response = yield call(axios.get, popularPeopleApiUrl);
    yield put(fetchPeopleSuccess(response.data.results));
    console.log(response);
  } catch (error) {
    yield put(fetchPeopleFailure(error));
  }
}

export function* watchFetchPeople() {
  yield takeLatest(fetchPeopleRequest.type, fetchPeople);
}
