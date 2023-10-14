import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  fetchPeopleRequest,
  fetchPeopleSuccess,
  fetchPeopleFailure,
  fetchAllPeopleSuccess,
} from "../slices/peopleSlice";
import axios from "axios";
import { popularPeopleApiUrl } from "../common/apiURLs";

import { apiUrlAll } from "../common/apiURLs";

// function* fetchPeople() {
//   try {
//     const response = yield call(axios.get, popularPeopleApiUrl);
//     yield put(fetchPeopleSuccess(response.data.results));
//     console.log(response);
//   } catch (error) {
//     yield put(fetchPeopleFailure(error));
//   }
// }

// export function* watchFetchPeople() {
//   yield takeLatest(fetchPeopleRequest.type, fetchPeople);
// }

function* fetchAllPeople() {
  const allPeople = [];
  const apiKey = "4b8fe2faad502d0967a22b78268baad6"; // Zastąp 'TwójKluczAPI' swoim własnym kluczem API

  const totalPagesToFetch = 500; // Ilość stron do pobrania (zmień na potrzebę)

  // Funkcja do pobierania danych z API

  for (let page = 1; page <= totalPagesToFetch; page++) {
    // const apiUrl = `https://api.themoviedb.org/3/person/popular?language=en-US&page=${page}&api_key=${apiKey}`;
    const apiUrl = `https://api.themoviedb.org/3/person/popular?language=en-US&page=${page}&api_key=${apiKey}`;

    try {
      const response = yield call(axios.get, apiUrl);
      yield put(fetchPeopleSuccess(response.data.results));
      // const data = await response.json();
      yield allPeople.push(...response.data.results);
      console.log(`Fetched page ${page}, total results: ${allPeople.length}`);
      yield put(fetchAllPeopleSuccess(allPeople));
    } catch (error) {
      console.error(error);
    }
  }

  console.log(allPeople);
  // return allMovies;
}

export function* watchFetchPeople() {
  yield takeLatest(fetchPeopleRequest.type, fetchAllPeople);
}
