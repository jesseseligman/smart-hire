import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';
import thunkMiddleware from 'redux-thunk';

const middleware = routerMiddleware(browserHistory);

const defaultState = {
  jobs: { items: [] },
  applications: { reviewedApplications: [], appsToReview: [] },
  exps: { toReview: [] },
  edus: { toReview: [] },
  questions: { toReview: [] }
};

const enhancers = compose(
  applyMiddleware(thunkMiddleware, middleware),
  window.devToolsExtension
  ? window.devToolsExtension() : (func) => func);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;

    store.replaceReducer(nextRootReducer);
  });
}

export default store;
