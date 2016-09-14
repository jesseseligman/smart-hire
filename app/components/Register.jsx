import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Register = React.createClass({

  render() {

    const styleButton = {
      marginBottom: '40px'
    };

    return <div>
    <div id="register-container">
      <div id="register-box">
        <h3 id="register-header">Register for Smart Hire</h3>
        <TextField
          name="email"
          floatingLabelText="Email"
          // onBlur={this.handleBlur}
          // onChange={this.handleChange}
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
          //onChange={this.handleChange}
          // onFocus={this.handleFocus}
          //placeholder="Password"
          type="password"
          //underlineFocusStyle={styleLabel}
          //value={credentials.password}
        />

        <TextField
          name="confirm-password"
          floatingLabelText="Confirm Password"
          // onBlur={this.handleBlur}
          //onChange={this.handleChange}
          // onFocus={this.handleFocus}
          //placeholder="Password"
          type="password"
          //underlineFocusStyle={styleLabel}
          //value={credentials.password}
        />

        <RaisedButton
          label="Register"
          //onTouchTap={this.handleTouchTap}
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

export default Register;
