import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import TextField from 'material-ui/TextField';

const Login = React.createClass({

  getInitialState() {
    return {
      credentials: {
        email: '',
        password: ''
      },
      open: false
    };
  },

  handleChange(event) {
    const { name, value } = event.target;
    const nextCredentials = Object.assign({}, this.state.credentials, {
      [name]: value
    });

    this.setState({ credentials: nextCredentials });
  },

  handleTouchTap() {
    this.props.submitLogin(this.state.credentials);
  },

  handleRequestClose() {
    this.setState({ open: false, });
  },

  handleKeyPress(event) {
    if (event.key !== 'Enter') {
      return;
    }

    const { email, password } = this.state.credentials;

    if (email.trim() && password.trim()) {
      return this.props.submitLogin(this.state.credentials);
    }

    this.setState({ open: true });
  },

  render() {
    const styleButton = {
      marginTop: '20px',
      marginBottom: '40px'
    };

    return <div>
      <div id="login-container">
        <div id="login-box">
          <h3 id="login-header">Login to Smart Hire</h3>
          <TextField
            floatingLabelText="Email"
            name="email"
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            type="email"
          />

          <TextField
            floatingLabelText="Password"
            name="password"
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            type="password"
          />

          <RaisedButton
            label="Login"
            onTouchTap={this.handleTouchTap}
            secondary={true}
            style={styleButton}
          />

        </div>
      </div>

      <Snackbar
        autoHideDuration={2500}
        message="Please enter a username and a password."
        onRequestClose={this.handleRequestClose}
        open={this.state.open}
      />

      <Snackbar
        autoHideDuration={2500}
        message="Invalid username or password."
        onRequestClose={this.props.loginSuccess}
        open={this.props.login.error}
      />

    </div>;
  }
});

export default Login;
