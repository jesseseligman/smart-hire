import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

const loggerMiddleware = createLogger();

const defaultState = {
  jobs: {items: []}
};

const enhancers = compose(
  applyMiddleware(thunkMiddleware, loggerMiddleware),
  window.devToolsExtension ?
  window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;

    store.replaceReducer(nextRootReducer);
  });
}

export default store;
