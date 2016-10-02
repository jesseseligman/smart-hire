import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import React from 'react';

const RadioButtons = React.createClass({

  render() {
    const styleHidden = {
      display: 'none'
    };

    return <div>
      <RadioButtonGroup
        name={`edu${this.props.appId}`}
        onChange={this.props.onChange}
        style={this.props.reviewed ? styleHidden : {}}
        defaultSelected={this.props.rating}
      >
        <RadioButton
          iconStyle={{ marginRight: '5px' }}
          label="1"
          style={{ display: 'inline-block', width: '65px' }}
          value={1}
        />
        <RadioButton
          iconStyle={{ marginRight: '5px' }}
          label="2"
          style={{ display: 'inline-block', width: '65px' }}
          value={2}
        />
        <RadioButton
          iconStyle={{ marginRight: '5px' }}
          label="3"
          style={{ display: 'inline-block', width: '65px' }}
          value={3}
        />
        <RadioButton
          iconStyle={{ marginRight: '5px' }}
          label="4"
          style={{ display: 'inline-block', width: '65px' }}
          value={4}
        />
        <RadioButton
          iconStyle={{ marginRight: '5px' }}
          label="5"
          style={{ display: 'inline-block', width: '65px' }}
          value={5}
        />
      </RadioButtonGroup>

    </div>;
  }
});

export default RadioButtons;
