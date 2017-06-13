import { combineReducers } from 'redux';
import countryReducer from './countries';

const rootReducer = combineReducers({
  countries: countryReducer,
});

export default rootReducer;
