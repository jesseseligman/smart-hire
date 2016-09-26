// eslint-disable-next-line max-len
import { Card, CardActions, CardText, CardTitle } from 'material-ui/Card';
import RadioButtons from 'components/RadioButtons';
import React from 'react';

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

    return <div className="card">
      <Card>
        <CardTitle
          title={alias ? `Applicant ${alias}` : question}
        />
        <CardText style={{ paddingTop: '0px' }}>
          {response}
        </CardText>

        <CardActions>
          <RadioButtons
            appId={this.props.appId}
            onChange={this.handleChange}
            reviewed={this.props.reviewed}
          />
        </CardActions>
      </Card>
    </div>;
  }
});

export default QuestionResponse;
