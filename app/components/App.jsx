import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const App = React.createClass({

  render() {
    return <div>
      <nav id="nav-bar">
        <div id="logo">Smart Hire</div>

        <div id="nav-button-container">
          <FlatButton
          label="Sign Up"
          primary={true}
          />
          <FlatButton
          label="Login"
          primary={true}
          />
          <FlatButton
          label="Find a job"
          primary={true}
          />
        </div>
      </nav>

      {React.cloneElement(this.props.children, {

      })}
    </div>
  }
});



export default App;
