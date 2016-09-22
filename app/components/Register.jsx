import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import Joi from 'joi';

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
  // getInitialState() {
  //   return {
  //     selectedState: null
  //   }
  // },
  //
  // handleChange(event) {
  //   const { name, value } = event.target;
  //
  //   const update = { [name]: value };
  //
  //   this.props.updateRegistration(update);
  //
  //   this.props.validateRegistration(name, value);
  // },

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
            name="firstName"
            floatingLabelText="First Name"
            errorText={errors.firstName}
            // onBlur={this.handleBlur}
            onChange={this.handleChange}
            // onFocus={this.handleFocus}
            //placeholder="Password"
            type="text"
            //underlineFocusStyle={styleLabel}
            value={user.firstName}
          />

          <TextField
            name="lastName"
            floatingLabelText="Last Name"
            errorText={errors.lastName}
            // onBlur={this.handleBlur}
            onChange={this.handleChange}
            // onFocus={this.handleFocus}
            //placeholder="Password"
            type="text"
            //underlineFocusStyle={styleLabel}
            value={user.lastName}
          />
        </div>

        <div className="pair-container">
          <TextField
            name="email"
            floatingLabelText="Email"
            errorText={errors.email}
            // onBlur={this.handleBlur}
            onChange={this.handleChange}
            // onFocus={this.handleFocus}
            //placeholder="Email"
            // style={styleTextField}
            type="email"
            // underlineFocusStyle={styleLabel}
            value={user.email}
          />

          <TextField
            name="phone"
            floatingLabelText="Phone"
            errorText={errors.phone}
            // onBlur={this.handleBlur}
            onChange={this.handleChange}
            // onFocus={this.handleFocus}
            //placeholder="Email"
            // style={styleTextField}
            type="text"
            // underlineFocusStyle={styleLabel}
            value={user.phone}
          />
        </div>

        <div className="pair-container">
          <TextField
            name="password"
            floatingLabelText="Password"
            errorText={errors.password}
            // onBlur={this.handleBlur}
            onChange={this.handleChange}
            // onFocus={this.handleFocus}
            //placeholder="Password"
            type="password"
            //underlineFocusStyle={styleLabel}
            value={user.password}
          />

          <TextField
            name="confirmPassword"
            floatingLabelText="Confirm Password"
            // onBlur={this.handleBlur}
            onChange={this.handleChange}
            // onFocus={this.handleFocus}
            //placeholder="Password"
            type="password"
            //underlineFocusStyle={styleLabel}
            value={user.confirmPassword}
          />
        </div>

        <div className="pair-container">

          <TextField
            name="companyName"
            floatingLabelText="Company Name"
            errorText={errors.companyName}
            style={{width: '30%', marginLeft: '20px'}}
            // onBlur={this.handleBlur}
            onChange={this.handleChange}
            // onFocus={this.handleFocus}
            //placeholder="Password"
            type="text"
            //underlineFocusStyle={styleLabel}
            value={user.companyName}
          />

          <TextField
            name="city"
            floatingLabelText="City"
            errorText={errors.city}
            style={{width: '30%'}}
            // onBlur={this.handleBlur}
            onChange={this.handleChange}
            // onFocus={this.handleFocus}
            //placeholder="Password"
            type="text"
            //underlineFocusStyle={styleLabel}
            value={user.city}
          />

          <TextField
            name="state"
            floatingLabelText="State"
            errorText={errors.state}
            style={{width: '13%'}}
            // onBlur={this.handleBlur}
            onChange={this.handleChange}
            // onFocus={this.handleFocus}
            //placeholder="Password"
            type="text"
            //underlineFocusStyle={styleLabel}
            value={user.state}
          />
        </div>

        <TextField
          name="companyDescription"
          floatingLabelText="Describe your company:"
          // onBlur={this.handleBlur}
          onChange={this.handleChange}
          // onFocus={this.handleFocus}
          //placeholder="Password"
          multiLine={true}
          style={{width: '88%'}}
          inputStyle={{ height: '120px' }}
          textareaStyle={{ height: '70px', width: '100%'}}
          type="text"
          //underlineFocusStyle={styleLabel}
          value={user.companyDescription}
        />

        <RaisedButton
          label="Register"
          secondary={true}
          style={styleButton}
          onTouchTap={this.handleTouchTap}
        />
      </div>
    </div>

    </div>
  }
})

export default Register;
