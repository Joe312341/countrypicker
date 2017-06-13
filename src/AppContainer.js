import React from 'react';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';

// components / reducers / actions
import App from './layout/App';
import rootReducer from './reducers';

// initial store setup
const configureStore = (initialState) => {
  const enhancer = compose(
    applyMiddleware(
      logger
    )
  );
  return createStore(rootReducer, initialState, enhancer);
};

const store = configureStore({});


const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppContainer;
