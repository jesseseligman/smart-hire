import React from 'react';
import ExperienceResponse from './ExperienceResponse';
import weakKey from 'weak-key';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

const ReviewExperience = React.createClass({

  getInitialState() {
    return {
      open: false
    }
  },

  handleTouchTap() {
    const applications = this.props.applications.appsToReview;

    for (const application of applications) {
      if (!application.expsRating) {
        return this.alertIncomplete();
      }
    }

    this.props.patchExps(applications);

    const appIds = applications.map((app) => {
      return app.id;
    });

    return this.props.fetchQuestions(appIds, this.props.jobs.selectedJob.id);
  },

  alertIncomplete() {
    this.setState({ open: true });
  },

  handleRequestClose() {
    this.setState({ open: false });
  },

  render() {
    const responses = this.props.exps.toReview;

    return <div className="dashboard-container">

      <div className="page-title-conatiner">
        <h3 className="page-title"> - Experience - </h3>
      </div>
      {responses.map((response, index) => {
        return <ExperienceResponse
          rateExps={this.props.rateExps}
          key={weakKey(response)}
          alias={index + 1}
          exps={response.exps}
          appId={response.applicationId}
        />
      })}

      <div className="next-button">
        <RaisedButton
          label="Next"
          onTouchTap={this.handleTouchTap}
        />
      </div>

      <Snackbar
         open={this.state.open}
         message='Please provide rating for each applicant.'
         autoHideDuration={2500}
         onRequestClose={this.handleRequestClose}
       />
    </div>
  }
})

export default ReviewExperience;
