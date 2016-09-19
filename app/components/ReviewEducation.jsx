import React from 'react';
import EducationResponse from './EducationResponse';
import weakKey from 'weak-key';

const ReviewEducation = React.createClass({

  componentWillMount() {
    const appIds = this.props.applications.appsToReview.map((app) => {
      return app.id;
    })

    return this.props.fetchEdus(appIds);
  },

  render() {
    const responses = this.props.edus.toReview;

    return <div className="dashboard-container">
      <h3>Education</h3>
      {responses.map((response, index) => {
        return <EducationResponse
          key={weakKey(response)}
          alias={index + 1}
          edus={response.edus}
          appId={response.applicationId}
        />
      })}
    </div>
  }
})

export default ReviewEducation;
