import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Login = React.createClass({

  getInitialState() {
    return {
      credentials: {
        email: '',
        password: ''
      }
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
          {/* <label for="email">Email</label>
          <input id="email" type="text" ref="email" placeholder="email"/>
          <label for="password">Password</label>
          <input id="password" type="password" ref="password" placeholder="password"/>
          <input type="submit"/> */}
        </div>
      </div>
    </div>
  }
})

export default Login;
