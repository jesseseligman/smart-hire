import React from 'react';
import QuestionResponse from './QuestionResponse';
import weakKey from 'weak-key';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';

const ReviewQuestion = React.createClass({

  handleTouchTap(toReview, index) {

    this.props.patchResponses(toReview[index].responses);

    if (index === toReview.length - 1) {
      const userId = 1;

      return this.props.patchOverallScores(this.props.applications.appsToReview);
      return browserHistory.push(`/dashboard/${userId}`);
    }

    const questionId = toReview[index + 1].questionId;
    const { jobId } = this.props.params;

    return browserHistory.push(`/review/${jobId}/question/${questionId}`);
  },

  render() {
    const { toReview }  = this.props.questions;

    const array = toReview.filter((questions) => {

      return questions.questionId === Number.parseInt(this.props.params.questionId);
    });

    const questionSet = array[0];

    return <div className="dashboard-container">
      <div className="page-title-conatiner">
        <h3 className="page-title">{questionSet.question}</h3>
      </div>
      {questionSet.responses.map((response, index) => {
        return <QuestionResponse
          rateResponse={this.props.rateResponse}
          questionsIndex={questionSet.index}
          responseIndex={index}
          key={weakKey(response)}
          alias={index + 1}
          response={response.response}
        />
      })}

      <div className="next-button">
        <RaisedButton
          label={questionSet.index === toReview.length - 1 ? "Finish" : "Next"}
          onTouchTap={() => this.handleTouchTap(toReview, questionSet.index)}
        />
      </div>

    </div>
  }
})

export default ReviewQuestion;
