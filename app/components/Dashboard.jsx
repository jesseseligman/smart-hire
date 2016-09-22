import React from 'react';
import EmployerListing from 'components/EmployerListing';
import weakKey from 'weak-key';

const Dashboard = React.createClass({

  componentWillMount() {
    this.props.fetchJobs(this.props.params.userId)
  },

  render() {

    return <div className="dashboard-container">

      <div className="page-title-conatiner">
        <h3 className="page-title">Your Jobs</h3>
      </div>
      {this.props.jobs.items.map((job) => {

        return <EmployerListing
          key={weakKey(job)}
          job={job}
          fetchReviewedApplications={this.props.fetchReviewedApplications}
          fetchUnreviewedApplications={this.props.fetchUnreviewedApplications}
          selectJob={this.props.selectJob}
        />
      })}
    </div>
  }
})

export default Dashboard;
