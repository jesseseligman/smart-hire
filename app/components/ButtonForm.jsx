import React from 'react';

const ButtonForm = React.createClass({
  getInitialState() {
    return {
      selected: null
    }
  },

  handleButtonClick(event) {
    this.setState({
      selected: event.target.value
    })
  },

  render() {
    return <form style={this.props.hidden ? {display: 'none'} : {}}>
      <div id="form-container">
      <div className="button-wrapper">
        <label >
          <input checked={this.state.selected === '1'}
          onChange={this.handleButtonClick} type="radio" value="1"/>
          1
        </label>
      </div>

      <div className="button-wrapper">
        <label>
          <input checked={this.state.selected === '2'}
          onChange={this.handleButtonClick} type="radio" value="2"/>
          2
        </label>
      </div>

      <div className="button-wrapper">
        <label>
          <input checked={this.state.selected === '3'}
          onChange={this.handleButtonClick} type="radio" value="3"/>
         3
        </label>
      </div>

      <div className="button-wrapper">
        <label>
        <input checked={this.state.selected === '4'}
        onChange={this.handleButtonClick} type="radio" value="4"/>
          4
        </label>
      </div>

      <div className="button-wrapper">
        <label>
          <input checked={this.state.selected === '5'}
          onChange={this.handleButtonClick} type="radio" value="5"/>
          5
        </label>
      </div>

      <div id="skip-button" className="button-wrapper">
        <label>
          <input checked={this.state.selected === 'skip'}
          onChange={this.handleButtonClick} type="radio" value="skip"/>
          Skip Question
        </label>
      </div>
      </div>
    </form>
  }
})

export default ButtonForm;
