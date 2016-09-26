import EducationResponse from './EducationResponse';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import weakKey from 'weak-key';

const ReviewEducation = React.createClass({

  getInitialState() {
    return {
      open: false
    };
  },

  componentWillMount() {
    const appIds = this.props.applications.appsToReview.map((app) => {
      return app.id;
    });

    return this.props.fetchEdus(appIds);
  },

  alertIncomplete() {
    this.setState({ open: true });
  },

  handleRequestClose() {
    this.setState({ open: false });
  },

  handleTouchTap() {
    const applications = this.props.applications.appsToReview;

    for (const application of applications) {
      if (!application.edusRating) {
        return this.alertIncomplete();
      }
    }

    this.props.patchEdus(applications);

    const appIds = applications.map((app) => {
      return app.id;
    });

    return this.props.fetchExps(appIds, this.props.jobs.selectedJob.id);
  },

  render() {
    const responses = this.props.edus.toReview;

    return <div className="dashboard-container">
      <div className="page-title-conatiner">
        <h3 className="page-title"> - Education - </h3>
      </div>

      {responses.map((response, index) => {
        return <EducationResponse
          alias={index + 1}
          appId={response.applicationId}
          edus={response.edus}
          key={weakKey(response)}
          rateEdus={this.props.rateEdus}
        />;
      })}

      <div className="next-button">
        <RaisedButton
          label="Next"
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

export default ReviewEducation;
