import * as types from './types';

export const requestAllCountries = () => ({
  type: types.ALL_COUNTRIES_FETCH_REQUESTED
});

export const selectCountry = name => ({
  type: types.SINGLE_COUNTRY_REQUEST,
  name
});

export const changeSearchFieldInput = inputValue => ({
  type: types.CHANGE_SEARCH_FIELD_INPUT,
  inputValue
});

export const setActiveCountryListItem = name => ({
  type: types.SET_ACTIVE_COUNTRY_LI,
  name
});
