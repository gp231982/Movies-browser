import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  fetchPeopleRequest,
  fetchPeopleSuccess,
  fetchPeopleFailure,
  fetchAllPeopleSuccess,
} from "../slices/peopleSlice";
import axios from "axios";
import { generatePeopleApiUrl, apiKey } from "../common/apiURLs";

function* fetchAllPeople() {
  const allPeople = [];
  const totalPagesToFetch = 500;

  try {
    yield delay(500);
    for (let page = 1; page <= totalPagesToFetch; page++) {
      const apiUrl = generatePeopleApiUrl(page, apiKey);
      const response = yield call(axios.get, apiUrl);
      allPeople.push(...response.data.results);
      yield put(fetchPeopleSuccess(response.data.results));
    }
    yield put(fetchAllPeopleSuccess(allPeople));  
  } catch (error) {
    console.error(error);
    yield put(fetchPeopleFailure("Wystąpił błąd podczas pobierania danych."));
  }
}
export function* watchFetchPeople() {
  yield takeLatest(fetchPeopleRequest.type, fetchAllPeople);
}
