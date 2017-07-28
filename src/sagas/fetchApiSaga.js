import fetch from 'isomorphic-fetch';
import { put, takeEvery, call } from 'redux-saga/effects';
import * as types from '../actions/types';
import { createCountryObject } from '../utils/helperFunctions';

const fetchFailed = () => {
  console.log('failed');
};

/**
 * returns all european countries from the restcountries api
 * @return {Promise}
 */
const fetchAllCountries = () => {
  const url = 'https://restcountries.eu/rest/v2/region/europe?fields=name;region';
  return fetch(url).then((response) => {
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return response.json();
  }).then(data => data);
};

/**
 * returns a single country from the restcountries api
 * @param {string} name
 * @return {Promise}
 */
const fetchSingleCountry = (name) => {
  const url = `https://restcountries.eu/rest/v2/name/${name}`;
  return fetch(url).then((response) => {
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return response.json();
  }).then(data => createCountryObject(data));
};

/**
 * generator function which calls fetchAllCountries and dispatches the according action
 * once fetchAllCountries returns the promise
 */
function* fetchData() {
  try {
    const data = yield call(fetchAllCountries);
    yield put({ type: types.ALL_COUNTRIES_FETCH_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: types.REQUEST_FAILED, error });
  }
}

/**
 * generator function which calls fetchSingleCountry and dispatches the according action
 * once fetchSingleCountry returns the promise
 */
function* fetchSingleCountryData(action) {
  try {
    const data = yield call(fetchSingleCountry, action.name);
    yield put({ type: types.SINGLE_COUNTRY_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: types.REQUEST_FAILED, error });
  }
}

/**
 * generator function which listens to every dispatch of 'ALL_COUNTRIES_FETCH_REQUESTED'
 * 'REQUEST_FAILED' and 'SINGLE_COUNTRY_REQUEST' and executes the respective functions
*/
export default function* watchFetchData() {
  yield takeEvery(types.ALL_COUNTRIES_FETCH_REQUESTED, fetchData);
  yield takeEvery(types.REQUEST_FAILED, fetchFailed);
  yield takeEvery(types.SINGLE_COUNTRY_REQUEST, fetchSingleCountryData);
}
