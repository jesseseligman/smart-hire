import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

const RadioButtons = React.createClass({

  render() {
    return <div>
      <RadioButtonGroup
        name={`edu${this.props.appId}`}
        onChange={this.props.handleChange}
        style={this.props.reviewed ? styleHidden : {}}
      >
        <RadioButton
          iconStyle={{marginRight: '5px'}}
          style={{display: 'inline-block', width: '65px'}}
          value={1}
          label="1"
        />
        <RadioButton
          iconStyle={{marginRight: '5px'}}
          style={{display: 'inline-block', width: '65px'}}
          value={2}
          label="2"
        />
        <RadioButton
          iconStyle={{marginRight: '5px'}}
          style={{display: 'inline-block', width: '65px'}}
          value={3}
          label="3"
        />
        <RadioButton
          iconStyle={{marginRight: '5px'}}
          style={{display: 'inline-block', width: '65px'}}
          value={4}
          label="4"
        />
        <RadioButton
          iconStyle={{marginRight: '5px'}}
          style={{display: 'inline-block', width: '65px'}}
          value={5}
          label="5"
        />
      </RadioButtonGroup>

    </div>
  }
})

export default RadioButtons;
