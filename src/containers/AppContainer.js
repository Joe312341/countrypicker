import React from 'react';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';

// components / reducers / sagas
import App from '../layout/App';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
// initial store setup
const configureStore = (initialState) => {
  const enhancer = compose(
    applyMiddleware(
      logger,
      sagaMiddleware
    )
  );
  return createStore(rootReducer, initialState, enhancer);
};

// create store
const store = configureStore({});

// run sagas
sagaMiddleware.run(rootSaga);

const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppContainer;
