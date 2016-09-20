import React from 'react';
import QuestionResponse from './QuestionResponse';
import weakKey from 'weak-key';

const ReviewQuestion = React.createClass({

  render() {

    const array = this.props.questions.toReview.filter((questions) => {
      
      return questions.questionId === Number.parseInt(this.props.params.questionId);
    });

    const data = array[0];

    return <div className="dashboard-container">
      <h3>{data.question}</h3>
      {data.responses.map((response, index) => {
        return <QuestionResponse
          key={weakKey(response)}
          alias={index + 1}
          response={response.response}
        />
      })}
    </div>
  }
})

export default ReviewQuestion;
