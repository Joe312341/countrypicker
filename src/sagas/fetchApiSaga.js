import fetch from 'isomorphic-fetch';
import { put, takeEvery, call } from 'redux-saga/effects';
import * as types from '../actions/types';

const fetchFailed = () => {
  console.log('failed');
};

const fetchAllCountries = () => {
  const url = 'https://restcountries.eu/rest/v2/region/europe?fields=name;region';
  return fetch(url).then((response) => {
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return response.json();
  }).then(data => data);
};

const fetchSingleCountry = (name) => {
  const url = `https://restcountries.eu/rest/v2/name/${name}`;
  return fetch(url).then((response) => {
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return response.json();
  }).then(data => data);
};


function* fetchData() {
  try {
    const data = yield call(fetchAllCountries);
    yield put({ type: types.ALL_COUNTRIES_FETCH_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: types.REQUEST_FAILED, error });
  }
}

function* fetchSingleCountryData(action) {
  try {
    const data = yield call(fetchSingleCountry, action.name);
    yield put({ type: types.SINGLE_COUNTRY_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: types.REQUEST_FAILED, error });
  }
}

export default function* watchFetchData() {
  // listen to every dispatch of 'FETCH_REQUESTED' and 'FETCH_FAILED'
  // and execute according functions
  yield takeEvery(types.ALL_COUNTRIES_FETCH_REQUESTED, fetchData);
  yield takeEvery(types.REQUEST_FAILED, fetchFailed);
  yield takeEvery(types.SINGLE_COUNTRY_REQUEST, fetchSingleCountryData);
}
