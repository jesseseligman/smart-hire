import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

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
    this.setState({ open: false });
  },

  handleKeyPress(event) {
    if (event.key !== 'Enter') {
      return;
    }

    const { email, password } = this.state.credentials;

    if (email.trim() && password.trim()) {
      return this.props.submitLogin(this.state.credentials);
    }

    this.setState({ open: true })
  },

  render() {

    const styleButton = {
      marginBottom: '40px'
    };

    return <div>
      <div id="login-container">
        <div id="login-box">
          <h3 id="login-header">Login to Smart Hire</h3>
          <TextField
            name="email"
            floatingLabelText="Email"
            // onBlur={this.handleBlur}
            onChange={this.handleChange}
            // onFocus={this.handleFocus}
            //placeholder="Email"
            // style={styleTextField}
            type="email"
            // underlineFocusStyle={styleLabel}
            // value={credentials.email}
          />

          <TextField
            name="password"
            floatingLabelText="Password"
            // onBlur={this.handleBlur}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            // onFocus={this.handleFocus}
            //placeholder="Password"
            type="password"
            //underlineFocusStyle={styleLabel}
            //value={credentials.password}
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
         open={this.state.open}
         message='Please enter a username and a password.'
         autoHideDuration={2500}
         onRequestClose={this.handleRequestClose}
       />
    </div>
  }
})

export default Login;
