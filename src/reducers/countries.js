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
};

export default function countriesReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
