import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ButtonForm from 'components/ButtonForm';
import RadioButtons from 'components/RadioButtons';


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
          <RadioButtons
            appId={this.props.appId}
            style={this.props.reviewed ? styleHidden : {}}
            handleChange={this.handleChange}
          />
        </CardActions>
      </Card>


    </div>
  }
})

export default QuestionResponse;
