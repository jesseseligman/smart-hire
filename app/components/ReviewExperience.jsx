import ExperienceResponse from './ExperienceResponse';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';
import weakKey from 'weak-key';

const ReviewExperience = React.createClass({

  getInitialState() {
    return {
      open: false
    };
  },

  componentWillMount() {
    if (!cookie.load('loggedIn')) {
      browserHistory.push('/');
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
          alias={index + 1}
          appId={response.applicationId}
          exps={response.exps}
          key={weakKey(response)}
          rateExps={this.props.rateExps}
          rating={this.props.applications.appsToReview[index].expsRating}
        />;
      })}

      <div className="next-button">
        <RaisedButton
          label="Save and Continue"
          onTouchTap={this.handleTouchTap}
        />
      </div>

      <Snackbar
        autoHideDuration={2500}
        message="Please provide rating for each applicant."
        onRequestClose={this.handleRequestClose}
        open={this.state.open}
      />
    </div>;
  }
});

export default ReviewExperience;
