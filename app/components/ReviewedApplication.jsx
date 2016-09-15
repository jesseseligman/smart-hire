import React from 'react';
import EducationResponse from './EducationResponse';
import ExperienceResponse from './ExperienceResponse';
import FlatButton from 'material-ui/FlatButton';
import QuestionResponse from './QuestionResponse';
const ReviewedApplication = React.createClass({

  handleTouchTap() {
    this.props.toggleAnonymous();
  },

  render() {
    const { firstName, lastName, phone, email, anonymous, exps, edus, responses, overallRating } = this.props.reviewedApplication;
    
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

      <EducationResponse edus={edus.edus} reviewed={true}/>

      <ExperienceResponse exps={exps.exps} reviewed={true}/>

      {responses.map((element) => {
        return <QuestionResponse
          response={element.response}
          question={element.question}
          reviewed={true}
        />
      })}

    </div>
  }
});

export default ReviewedApplication;
