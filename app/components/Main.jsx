import React from 'react';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import cookie from 'react-cookie';

const Main = React.createClass({

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

    const styleHidden = {
      display: 'none'
    };

    const isLoggedIn = cookie.load('loggedIn');

    return <div>
      <nav id="nav-bar">
        <Link to={'/'}>
          <div id="logo">Smart Hire</div>
        </Link>

        <div id="hamburger">
          <IconButton
            iconStyle={styleHamburger.mediumIcon}
            style={styleHamburger.medium}
          >
            <NavigationMenu color={'#F9FDFE'} />
          </IconButton>
        </div>

        <div id="nav-button-container">
          <Link to={'/register'}>
            <FlatButton
              label="Sign Up"
              labelStyle={styleButton}
              style={{color: '#F9FDFE'}}
            />
          </Link>
          <Link to={'/login'}>
            <FlatButton
              label="Login"
              labelStyle={styleButton}
              style={{color: '#F9FDFE'}}
            />
          </Link>
          <Link>
            <FlatButton
              label="Find a job"
              labelStyle={styleButton}
              style={{color: '#F9FDFE'}}
            />
          </Link>
          <div style={isLoggedIn ? {} : styleHidden}>
            <FlatButton
              label="Logout"
              labelStyle={styleButton}
              style={{color: '#F9FDFE'}}
            />
          </div>
        </div>
      </nav>

      {React.cloneElement(this.props.children, this.props)}
    </div>
  }
});



export default Main;
