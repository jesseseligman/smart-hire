import React from 'react';
import EducationResponse from './EducationResponse';
import weakKey from 'weak-key';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

const ReviewEducation = React.createClass({

  getInitialState() {
    return {
      open: false
    }
  },

  componentWillMount() {
    const appIds = this.props.applications.appsToReview.map((app) => {
      return app.id;
    })

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
          rateEdus={this.props.rateEdus}
          key={weakKey(response)}
          alias={index + 1}
          edus={response.edus}
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

export default ReviewEducation;
