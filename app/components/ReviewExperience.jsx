import React from 'react';
import ExperienceResponse from './ExperienceResponse';
import weakKey from 'weak-key';
import RaisedButton from 'material-ui/RaisedButton';


const ReviewExperience = React.createClass({

  handleTouchTap() {
    const appIds = this.props.applications.appsToReview.map((app) => {
      return app.id;
    });

    return this.props.fetchQuestions(appIds, this.props.jobs.selectedJob.id);
  },

  render() {
    const responses = this.props.exps.toReview;

    return <div className="dashboard-container">
      <h3>Experience</h3>
      {responses.map((response, index) => {
        return <ExperienceResponse
          key={weakKey(response)}
          alias={index + 1}
          exps={response.exps}
        />
      })}

      <RaisedButton
        label="Next"
        onTouchTap={this.handleTouchTap}
      />
    </div>
  }
})

export default ReviewExperience;
