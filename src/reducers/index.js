import { combineReducers } from 'redux';
import countryReducer from './countries';

/**
 * combineReducers is used to demonstrate a scalable approach for apps which have many reducers
*/
const rootReducer = combineReducers({
  countryReducer,
});

export default rootReducer;
