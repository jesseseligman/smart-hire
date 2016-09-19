import React from 'react';
import ExperienceResponse from './ExperienceResponse';
import weakKey from 'weak-key';
import RaisedButton from 'material-ui/RaisedButton';


const ReviewExperience = React.createClass({

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
