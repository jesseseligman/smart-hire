import QuestionResponse from './QuestionResponse';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import { browserHistory } from 'react-router';
import weakKey from 'weak-key';

const ReviewQuestion = React.createClass({
  handleTouchTap(toReview, index) {
    this.props.patchResponses(toReview[index].responses);

    if (index === toReview.length - 1) {
      // eslint-disable-next-line max-len
      return this.props.patchOverallScores(this.props.applications.appsToReview);
    }

    const questionId = toReview[index + 1].questionId;
    const { jobId } = this.props.params;

    return browserHistory.push(`/review/${jobId}/question/${questionId}`);
  },

  render() {
    const { toReview } = this.props.questions;
    const array = toReview.filter((questions) => {
      // eslint-disable-next-line max-len
      return questions.questionId === Number.parseInt(this.props.params.questionId);
    });
    const questionSet = array[0];

    return <div className="dashboard-container">
      <div className="page-title-conatiner">
        <h3 className="page-title">{questionSet.question}</h3>
      </div>
      {questionSet.responses.map((response, index) => {
        return <QuestionResponse
          alias={index + 1}
          key={weakKey(response)}
          questionsIndex={questionSet.index}
          rateResponse={this.props.rateResponse}
          response={response.response}
          responseIndex={index}
          rating={response.rating}
        />;
      })}

      <div className="next-button">
        <RaisedButton
          label={questionSet.index === toReview.length - 1 ? 'Finish' : 'Save and Continue'}
          onTouchTap={() => this.handleTouchTap(toReview, questionSet.index)}
        />
      </div>
    </div>;
  }
});

export default ReviewQuestion;
