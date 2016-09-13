import React from 'react';

const App = React.createClass({

  render() {
    return <div>
      <nav id="nav-bar">
        <div id="logo">Smart Hire</div>
      </nav>

      {React.cloneElement(this.props.children, {
        
      })}
    </div>
  }
});



export default App;
