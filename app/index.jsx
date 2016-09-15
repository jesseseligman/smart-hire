// components
import Main from './components/Main';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import ReviewedApplication from './components/ReviewedApplication';
import ReviewQuestion from './components/ReviewQuestion';
import ReviewEducation from './components/ReviewEducation';
import ReviewExperience from './components/ReviewExperience';
import Results from './components/Results';

// dependencies
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

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
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={Landing}/>
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
        <Route path="dashboard/:userId" component={Dashboard} />
        <Route path="review/:jobId/education" component={ReviewEducation}/>
        <Route path="review/:jobId/experience" component={ReviewExperience}/>
        <Route path="review/:jobId/question/:questionId" component={ReviewQuestion}/>
        <Route path="results/:jobId" component={Results} />
        <Route path="application/:applicationId" component={ReviewedApplication} />
      </Route>
    </Router>
  </Provider>
</MuiThemeProvider>


ReactDOM.render(
  router,
  document.getElementById('app')
);
