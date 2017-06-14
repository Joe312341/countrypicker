// import * as types from '../actions/types'

const initialState = {
  countries: [
    {
      name: 'Singapore',
      region: 'Asia'
    },
    {
      name: 'Germany',
      region: 'Europe'
    },
    {
      name: 'Canada',
      region: 'North America'
    }
  ],
  selectedCountry: {
    name: 'Colombia',
    capital: 'Bogotá',
    region: 'Americas',
    population: 48759958,
    currencies: [{ code: 'COP', name: 'Colombian peso', symbol: '$' }],
    languages: [{ iso639_1: 'es', iso639_2: 'spa', name: 'Spanish', nativeName: 'Español' }],
    flag: 'https://restcountries.eu/data/col.svg'
  }
};

export default function countriesReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
