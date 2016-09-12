// components
import App from './components/App';

// dependencies
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

injectTapEventPlugin();

const router = <MuiThemeProvider>
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>

      </Route>
    </Router>
  </Provider>
</MuiThemeProvider>


ReactDOM.render(
  router,
  document.getElementById('app')
);
