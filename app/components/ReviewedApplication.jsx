import React from 'react';
import EducationResponse from './EducationResponse';
import ExperienceResponse from './ExperienceResponse';
import FlatButton from 'material-ui/FlatButton';
import QuestionResponse from './QuestionResponse';
import weakKey from 'weak-key';

const ReviewedApplication = React.createClass({

  handleTouchTap() {
    this.props.toggleAnonymous();
  },


  render() {
    const { firstName, lastName, phone, email, anonymous, exps, edus, responses, overallRating } = this.props.applications.completeReviewedApplication;

    return <div id="application-container">
      <div id="applicant-info">
          <h3>Name: {anonymous ? 'Anonymous' : `${firstName} ${lastName}`}</h3>
          <h3>Email: {anonymous ? 'Anonymous' :
          email}</h3>
          <h3>Phone: {phone}</h3>
          <h3>Overall Rating: {overallRating}</h3>

          <FlatButton
            label={anonymous ? "Show Name and Email" :
            "Hide Name and Email"}
            labelStyle={{color: '#F9FDFE'}}
            onTouchTap={this.handleTouchTap}
          />

      </div>

      <EducationResponse edus={edus} reviewed={true}/>

      <ExperienceResponse exps={exps} reviewed={true}/>

      {responses.map((element) => {
        return <QuestionResponse
          key={weakKey(element)}
          response={element.response}
          question={element.question}
          reviewed={true}
        />
      })}

    </div>
  }
});

export default ReviewedApplication;
