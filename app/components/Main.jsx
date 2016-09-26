import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import React from 'react';
import cookie from 'react-cookie';

const Main = React.createClass({

  handleTouchTap() {
    this.props.submitLogout();
  },

  render() {
    const styleHamburger = {
      mediumIcon: {
        width: 48,
        height: 48
      },
      medium: {
        width: 96,
        height: 96,
        padding: 24
      }
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
        <Link to={isLoggedIn ? `/dashboard/${cookie.load('userId')}` : '/'}>
          <div id="logo-container">
            <div id="logo">
              Smart Hire
            </div>
            <img id="handshake" src={'./images/handshake.svg'} />
          </div>
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

          <div style={isLoggedIn ? styleHidden : {}}>
            <Link to={'/register'}>
              <FlatButton
                label="Sign Up"
                labelStyle={styleButton}
                style={{ color: '#F9FDFE' }}
              />
            </Link>
          </div>

          <div style={isLoggedIn ? styleHidden : {}}>
            <Link to={'/login'}>
              <FlatButton
                label="Login"
                labelStyle={styleButton}
                style={{ color: '#F9FDFE' }}
              />
            </Link>
          </div>

          <div style={isLoggedIn ? styleHidden : {}}>
            <Link>
              <FlatButton
                label="Find a job"
                labelStyle={styleButton}
                style={{ color: '#F9FDFE' }}
              />
            </Link>
          </div>

          <div style={isLoggedIn ? {} : styleHidden}>
            <Link to={`/dashboard/${cookie.load('userId')}`}>
              <FlatButton
                label="Your Jobs"
                labelStyle={styleButton}
                style={{ color: '#F9FDFE' }}
              />
            </Link>
          </div>

          <div style={isLoggedIn ? {} : styleHidden}>
            <FlatButton
              label="Logout"
              labelStyle={styleButton}
              onTouchTap={this.handleTouchTap}
              style={{ color: '#F9FDFE' }}
            />
          </div>
        </div>
      </nav>

      {React.cloneElement(this.props.children, this.props)}
    </div>;
  }
});

export default Main;
