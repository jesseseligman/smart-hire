import EducationResponse from './EducationResponse';
import ExperienceResponse from './ExperienceResponse';
import FlatButton from 'material-ui/FlatButton';
import QuestionResponse from './QuestionResponse';
import React from 'react';
import { hyphenizePhone } from '../utils';
import weakKey from 'weak-key';

const ReviewedApplication = React.createClass({

  handleTouchTap(id, anonymous) {
    this.props.toggleAnonymous(id, !anonymous);
    this.props.patchAnonymous(id, !anonymous);
  },

  render() {
    // eslint-disable-next-line max-len
    const { firstName, lastName, phone, email, anonymous, exps, edus, responses, overallScore, id } = this.props.applications.completeReviewedApplication;

    return <div id="application-container">
      <h2 id="title-label">Applicant for: {this.props.jobs.selectedJob.title}
      </h2>
      <div className="row-container">

        <div id="applicant-info">

          <h4>{anonymous ? 'Name: Anonymous' : `${firstName} ${lastName}`}</h4>
          <h4>{anonymous ? 'Email: Anonymous' : email}</h4>
          <h4>Phone: {hyphenizePhone(phone)}</h4>
          <h4>Overall Rating: {overallScore}</h4>

          <FlatButton
            label={anonymous ? 'Show Name and Email' : 'Hide Name and Email'}
            labelStyle={{ color: '#174859' }}
            onTouchTap={() => this.handleTouchTap(id, anonymous)}
          />
        </div>
      </div>

      <div id="application-body-container">
        <div id="background-container">

          <div id="education">
            <EducationResponse
              edus={edus}
              reviewed={true}
            />
          </div>

          <div id="experience">
            <ExperienceResponse
              exps={exps}
              reviewed={true}
            />
          </div>

        </div>

        {responses.map((element) => {
          return <QuestionResponse
            key={weakKey(element)}
            question={element.question}
            response={element.response}
            reviewed={true}
          />;
        })}
      </div>

    </div>;
  }
});

export default ReviewedApplication;
