import EmployerListing from 'components/EmployerListing';
import React from 'react';
import weakKey from 'weak-key';

const Dashboard = React.createClass({
  componentWillMount() {
    this.props.fetchJobs(this.props.params.userId);
  },

  render() {
    return <div className="dashboard-container">

      <div className="page-title-conatiner">
        <h3 className="page-title">Your Jobs</h3>
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
