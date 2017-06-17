import * as types from '../actions/types';

const initialState = {
  countries: [],
  // countries: [
  //   {
  //     name: 'Singapore',
  //     region: 'Asia'
  //   },
  //   {
  //     name: 'Germany',
  //     region: 'Europe'
  //   },
  //   {
  //     name: 'Canada',
  //     region: 'North America'
  //   }
  // ],
  // api request for certain country
  selectedCountry: {
    name: 'Colombia',
    capital: 'Bogotá',
    region: 'Americas',
    population: 48759958,
    currencies: [{ code: 'COP', name: 'Colombian peso', symbol: '$' }],
    languages: [{ iso639_1: 'es', iso639_2: 'spa', name: 'Spanish', nativeName: 'Español' }],
    flag: 'https://restcountries.eu/data/col.svg'
  },
  searchFieldInput: '',
  // this is for the UI part of marking the selected list item and is seperated from data concerns
  activeCountryLI: ''
};

export default function countriesReducer(state = initialState, action) {
  switch (action.type) {
    case types.ALL_COUNTRIES_FETCH_SUCCEEDED:
      return {
        ...state,
        countries: action.data
      };
    case types.REQUEST_FAILED:
      return {
        ...state
      };
    case types.SINGLE_COUNTRY_SUCCEEDED:
      return {
        ...state,
        selectedCountry: action.data[0]
      };
    case types.CHANGE_SEARCH_FIELD_INPUT:
      return {
        ...state,
        searchFieldInput: action.inputValue
      };
    case types.SET_ACTIVE_COUNTRY_LI:
      return {
        ...state,
        activeCountryLI: action.name
      };
    default:
      return state;
  }
}
