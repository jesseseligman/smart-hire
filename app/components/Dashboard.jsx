import EmployerListing from 'components/EmployerListing';
import IconButton from 'material-ui/IconButton';
import React from 'react';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';
import weakKey from 'weak-key';

const Dashboard = React.createClass({
  componentWillMount() {
    if (!cookie.load('loggedIn')) {
      browserHistory.push('/');
    }
    this.props.fetchJobs(this.props.params.userId);
  },

  render() {

    return <div className="dashboard-container">

      <div className="page-title-conatiner">
        <h3 className="page-title" id="jobs-title">Your Jobs</h3>

        <div id="post-job-container">
          <div id="review">Post New Job</div>
          <IconButton
            iconClassName="material-icons">
            note_add</IconButton>
        </div>

      </div>

      {this.props.jobs.items.map((job) => {
        return <EmployerListing
          fetchReviewedApplications={this.props.fetchReviewedApplications}
          fetchUnreviewedApplications={this.props.fetchUnreviewedApplications}
          job={job}
          key={weakKey(job)}
          selectJob={this.props.selectJob}
        />;
      })}
    </div>;
  }
});

export default Dashboard;
