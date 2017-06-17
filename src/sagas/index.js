import { all } from 'redux-saga/effects';
import watchFetchData from './fetchApiSaga';

export default function* rootSaga() {
  yield all([
    watchFetchData(),
  ]);
}
