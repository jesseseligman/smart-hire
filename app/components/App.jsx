import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

const App = React.createClass({

  render() {

    const styleHamburger = {
      mediumIcon: {
        width: 48,
        height: 48,
      },
      medium: {
        width: 96,
        height: 96,
        padding: 24,
      },
    };

    const styleButton = {
      fontWeight: 'lighter'
    };

    return <div>
      <nav id="nav-bar">
        <div id="logo">Smart Hire</div>

        <IconButton
          iconStyle={styleHamburger.mediumIcon}
          style={styleHamburger.medium}
        >
          <NavigationMenu color={'#F9FDFE'} />
        </IconButton>

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
