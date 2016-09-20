import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ButtonForm from 'components/ButtonForm';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const QuestionResponse = React.createClass({

  handleChange(event, rating) {
    const data = {
      responseId: this.props.response.id,
      questionsIndex: this.props.questionsIndex,
      responseIndex: this.props.responseIndex,
      rating
    };

    this.props.rateResponse(data);
  },

  render() {
    const { alias, question, response } = this.props;

    const styleHidden = { display: 'none' };

    return <div className="card">
      <Card>
        <CardTitle
          title={ alias ? `Applicant ${alias}` : question }
        />
        <CardText style={{paddingTop: '0px'}}>
          {response}
        </CardText>

        <CardActions>
          <RadioButtonGroup
            name={`edu${this.props.appId}`}
            onChange={this.handleChange}
            style={this.props.reviewed ? styleHidden : {}}
          >
            <RadioButton
              value={1}
              label="1"
            />
            <RadioButton
              value={2}
              label="2"
            />
            <RadioButton
              value={3}
              label="3"
            />
            <RadioButton
              value={4}
              label="4"
            />
            <RadioButton
              value={5}
              label="5"
            />
          </RadioButtonGroup>
        </CardActions>
      </Card>


    </div>
  }
})

export default QuestionResponse;
