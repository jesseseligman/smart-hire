import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';

const Register = React.createClass({

  render() {

    const styleButton = {
      marginBottom: '20px',
      marginTop: '20px'
    };

    return <div>
    <div id="register-container">
      <div id="register-box">
        <h3 id="register-header">Register for Smart Hire</h3>

        <div className="pair-container">
          <TextField
            name="first-name"
            floatingLabelText="First Name"
            // onBlur={this.handleBlur}
            //onChange={this.handleChange}
            // onFocus={this.handleFocus}
            //placeholder="Password"
            type="text"
            //underlineFocusStyle={styleLabel}
            //value={credentials.password}
          />

          <TextField
            name="last-name"
            floatingLabelText="Last Name"
            // onBlur={this.handleBlur}
            //onChange={this.handleChange}
            // onFocus={this.handleFocus}
            //placeholder="Password"
            type="text"
            //underlineFocusStyle={styleLabel}
            //value={credentials.password}
          />
        </div>

        <div className="pair-container">
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
            name="phone"
            floatingLabelText="Phone"
            // onBlur={this.handleBlur}
            // onChange={this.handleChange}
            // onFocus={this.handleFocus}
            //placeholder="Email"
            // style={styleTextField}
            type="text"
            // underlineFocusStyle={styleLabel}
            // value={credentials.email}
          />
        </div>

        <div className="pair-container">
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
        </div>

        <div className="pair-container">

          <TextField
            name="company-name"
            floatingLabelText="Company Name"
            style={{width: '30%', marginLeft: '20px'}}
            // onBlur={this.handleBlur}
            //onChange={this.handleChange}
            // onFocus={this.handleFocus}
            //placeholder="Password"
            type="text"
            //underlineFocusStyle={styleLabel}
            //value={credentials.password}
          />

          <TextField
            name="city"
            floatingLabelText="City"
            style={{width: '30%'}}
            // onBlur={this.handleBlur}
            //onChange={this.handleChange}
            // onFocus={this.handleFocus}
            //placeholder="Password"
            type="text"
            //underlineFocusStyle={styleLabel}
            //value={credentials.password}
          />

          <SelectField
            autoWidth={true}
            maxHeight={150}
            hintText="State"
            menuStyle={{width: '100px'}}
            style={{width: '100px', marginRight: '20px'}}
          >
            <MenuItem value={"AL"} primaryText={"AL"}/>
            <MenuItem value={"AK"} primaryText={"AK"} />
            <MenuItem value={"AZ"} primaryText={"AZ"}/>
            <MenuItem value={"AR"} primaryText={"AR"}/>
            <MenuItem value={"CA"} primaryText={"CA"}/>
            <MenuItem value={"CO"} primaryText={"CO"}/>
            <MenuItem value={"CT"} primaryText={"CT"}/>
            <MenuItem value={"DE"} primaryText={"DE"}/>
            <MenuItem value={"FL"} primaryText={"FL"}/>
            <MenuItem value={"GA"} primaryText={"GA"}/>
            <MenuItem value={"HI"} primaryText={"HI"}/>
            <MenuItem value={"ID"} primaryText={"ID"}/>
            <MenuItem value={"IL"} primaryText={"IL"}/>
            <MenuItem value={"IN"} primaryText={"IN"}/>
            <MenuItem value={"IA"} primaryText={"IA"}/>
            <MenuItem value={"KS"} primaryText={"KS"}/>
            <MenuItem value={"KY"} primaryText={"KY"}/>
            <MenuItem value={"LA"} primaryText={"LA"}/>
            <MenuItem value={"ME"} primaryText={"ME"}/>
            <MenuItem value={"MD"} primaryText={"MD"}/>
            <MenuItem value={"MA"} primaryText={"MA"}/>
            <MenuItem value={"MI"} primaryText={"MI"}/>
            <MenuItem value={"MN"} primaryText={"MN"}/>
            <MenuItem value={"MS"} primaryText={"MS"}/>
            <MenuItem value={"MO"} primaryText={"MO"}/>
            <MenuItem value={"MT"} primaryText={"MT"}/>
            <MenuItem value={"NE"} primaryText={"NE"}/>
            <MenuItem value={"NV"} primaryText={"NV"}/>
            <MenuItem value={"NH"} primaryText={"NH"}/>
            <MenuItem value={"NJ"} primaryText={"NJ"}/>
            <MenuItem value={"NM"} primaryText={"NM"}/>
            <MenuItem value={"NY"} primaryText={"NY"}/>
            <MenuItem value={"NC"} primaryText={"NC"}/>
            <MenuItem value={"ND"} primaryText={"ND"}/>
            <MenuItem value={"OH"} primaryText={"OH"}/>
            <MenuItem value={"OK"} primaryText={"OK"}/>
            <MenuItem value={"OR"} primaryText={"OR"}/>
            <MenuItem value={"PA"} primaryText={"PA"}/>
            <MenuItem value={"RI"} primaryText={"RI"}/>
            <MenuItem value={"SC"} primaryText={"SC"}/>
            <MenuItem value={"SD"} primaryText={"SD"}/>
            <MenuItem value={"TN"} primaryText={"TN"}/>
            <MenuItem value={"TX"} primaryText={"TX"}/>
            <MenuItem value={"UT"} primaryText={"UT"}/>
            <MenuItem value={"VT"} primaryText={"VT"}/>
            <MenuItem value={"VA"} primaryText={"VA"}/>
            <MenuItem value={"WA"} primaryText={"WA"}/>
            <MenuItem value={"WV"} primaryText={"WV"}/>
            <MenuItem value={"WI"} primaryText={"WI"}/>
            <MenuItem value={"WY"} primaryText={"WY"}/>
          </SelectField>

        </div>

        <TextField
          name="company-description"
          floatingLabelText="Describe your company:"
          // onBlur={this.handleBlur}
          //onChange={this.handleChange}
          // onFocus={this.handleFocus}
          //placeholder="Password"
          multiLine={true}
          style={{width: '88%'}}
          inputStyle={{ height: '120px' }}
          textareaStyle={{ height: '70px', width: '100%'}}
          type="text"
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
