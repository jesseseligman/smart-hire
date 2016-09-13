// components
import App from './components/App';
import Landing from './components/Landing';

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
    primary1Color: '#F9FDFE',
    primaryTextColor: '#F9FDFE',
    alternateTextColor: '#174859'
  }
});

const router = <MuiThemeProvider muiTheme={muiTheme}>
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Landing}/>

      </Route>
    </Router>
  </Provider>
</MuiThemeProvider>


ReactDOM.render(
  router,
  document.getElementById('app')
);
