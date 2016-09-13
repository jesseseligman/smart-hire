import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const App = React.createClass({

  render() {

    const styleButton = {
      fontWeight: 'lighter'
    };
    
    return <div>
      <nav id="nav-bar">
        <div id="logo">Smart Hire</div>

        <div id="nav-button-container">
          <FlatButton
          label="Sign Up"
          labelStyle={styleButton}
          primary={true}
          />
          <FlatButton
          label="Login"
          labelStyle={styleButton}
          primary={true}
          />
          <FlatButton
          label="Find a job"
          labelStyle={styleButton}
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
