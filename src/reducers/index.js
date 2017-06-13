import { combineReducers } from 'redux';
import countryReducer from './countries';

const rootReducer = combineReducers({
  countryReducer,
});

export default rootReducer;
