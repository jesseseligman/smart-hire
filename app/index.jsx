/* eslint-disable max-len */

import { IndexRoute, Route, Router, applyRouterMiddleware } from 'react-router';
import store, { history } from './store';
import App from './components/App';
import Dashboard from './components/Dashboard';
import Landing from './components/Landing';
import Login from './components/Login';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Register from './components/Register';
import Results from './components/Results';
import ReviewEducation from './components/ReviewEducation';
import ReviewExperience from './components/ReviewExperience';
import ReviewQuestion from './components/ReviewQuestion';
import ReviewedApplication from './components/ReviewedApplication';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { useScroll } from 'react-router-scroll';

injectTapEventPlugin();

const muiTheme = getMuiTheme({

  palette: {
    primary1Color: '#405D63',
    primaryTextColor: '#F9FDFE',
    alternateTextColor: '#F9FDFE',
    disabledColor: '#405D63',
    accent1Color: '#B85948'
  }
});

const router = <MuiThemeProvider muiTheme={muiTheme}>
  <Provider store={store}>
    <Router history={history} render={applyRouterMiddleware(useScroll())}>
      <Route component={App} path="/" >
        <IndexRoute component={Landing} />
        <Route component={Login} path="login" />
        <Route component={Register} path="register" />
        <Route component={Dashboard} path="dashboard/:userId" />
        <Route component={ReviewEducation} path="review/:jobId/education" />
        <Route component={ReviewExperience} path="review/:jobId/experience" />
        <Route component={ReviewQuestion} path="review/:jobId/question/:questionId" />
        <Route component={Results} path="results/:jobId" />
        <Route component={ReviewedApplication} path="application/:applicationId" />
      </Route>
    </Router>
  </Provider>
</MuiThemeProvider>;

ReactDOM.render(
  router,
  document.getElementById('app')
);
