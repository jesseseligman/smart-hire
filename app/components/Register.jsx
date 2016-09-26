import Joi from 'joi';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import TextField from 'material-ui/TextField';

const schema = {
  email: Joi.string()
    .email()
    .trim()
    .required()
    .label('Email'),
  password: Joi.string()
    .trim()
    .required()
    .min(5)
    .label('Password'),
  phone: Joi.string()
    .trim()
    .required()
    .min(10)
    .label('Phone number'),
  firstName: Joi.string()
    .trim()
    .required()
    .label('First name'),
  lastName: Joi.string()
    .trim()
    .required()
    .label('Last Name'),
  companyName: Joi.string()
    .trim()
    .required()
    .label('Company Name'),
  companyDescription: Joi.string()
    .trim()
    .required()
    .label('Company Description'),
  city: Joi.string()
    .trim()
    .required()
    .label('city'),
  state: Joi.string()
    .trim()
    .required()
    .label('state'),
  confirmPassword: Joi.string()
};

const Register = React.createClass({
  getInitialState() {
    return {
      errors: {},
      user: {
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        firstName: '',
        lastName: '',
        companyName: '',
        companyDescription: '',
        state: '',
        city: ''
      }
    };
  },

  handleTouchTap() {
    const result = Joi.validate(this.state.user, schema, {
      abortEarly: false,
      allowUnknown: true
    });

    if (result.error) {
      const nextErrors = {};

      for (const detail of result.error.details) {
        nextErrors[detail.path] = detail.message;
      }

      return this.setState({ errors: nextErrors });
    }

    this.setState({ errors: {}});
    this.props.submitRegistration(this.state.user);
  },

  handleChange(event) {
    const { name, value } = event.target;
    const nextUser = Object.assign({}, this.state.user, { [name]: value });

    this.setState({ user: nextUser });

    const nextErrors = Object.assign({}, this.state.errors);
    const result = Joi.validate({ [name]: value }, {
      [name]: schema[name] });

    if (result.error) {
      for (const detail of result.error.details) {
        nextErrors[detail.path] = detail.message;
      }

      return this.setState({ errors: nextErrors });
    }

    delete nextErrors[name];

    this.setState({ errors: nextErrors });
  },

  render() {
    const styleButton = {
      marginBottom: '20px',
      marginTop: '20px'
    };

    const { errors, user } = this.state;

    return <div>
      <div id="register-container">
        <div id="register-box">
          <h3 id="register-header">Register for Smart Hire</h3>

          <div className="pair-container">
            <TextField
              errorText={errors.firstName}
              floatingLabelText="First Name"
              name="firstName"
              onChange={this.handleChange}
              type="text"
              value={user.firstName}
            />

            <TextField
              errorText={errors.lastName}
              floatingLabelText="Last Name"
              name="lastName"
              onChange={this.handleChange}
              type="text"
              value={user.lastName}
            />
          </div>

          <div className="pair-container">
            <TextField
              errorText={errors.email}
              floatingLabelText="Email"
              name="email"
              onChange={this.handleChange}
              type="email"
              value={user.email}
            />

            <TextField
              errorText={errors.phone}
              floatingLabelText="Phone"
              name="phone"
              onChange={this.handleChange}
              type="text"
              value={user.phone}
            />
          </div>

          <div className="pair-container">
            <TextField
              errorText={errors.password}
              floatingLabelText="Password"
              name="password"
              onChange={this.handleChange}
              type="password"
              value={user.password}
            />

            <TextField
              floatingLabelText="Confirm Password"
              name="confirmPassword"
              onChange={this.handleChange}
              type="password"
              value={user.confirmPassword}
            />
          </div>

          <div className="pair-container">

            <TextField
              errorText={errors.companyName}
              floatingLabelText="Company Name"
              name="companyName"
              onChange={this.handleChange}
              style={{ width: '30%', marginLeft: '20px' }}
              type="text"
              value={user.companyName}
            />

            <TextField
              errorText={errors.city}
              floatingLabelText="City"
              name="city"
              onChange={this.handleChange}
              style={{ width: '30%' }}
              type="text"
              value={user.city}
            />

            <TextField
              errorText={errors.state}
              floatingLabelText="State"
              name="state"
              onChange={this.handleChange}
              style={{ width: '13%' }}
              type="text"
              value={user.state}
            />
          </div>

          <TextField
            floatingLabelText="Describe your company:"
            inputStyle={{ height: '120px' }}
            multiLine={true}
            name="companyDescription"
            onChange={this.handleChange}
            style={{ width: '88%' }}
            textareaStyle={{ height: '70px', width: '100%' }}
            type="text"
            value={user.companyDescription}
          />

          <RaisedButton
            label="Register"
            onTouchTap={this.handleTouchTap}
            secondary={true}
            style={styleButton}
          />
        </div>
      </div>
    </div>;
  }
});

export default Register;
