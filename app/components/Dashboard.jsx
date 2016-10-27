// import ContentAdd from 'material-ui/svg-icons/content/add';
import EmployerListing from 'components/EmployerListing';
// import FloatingActionButton from 'material-ui/FloatingActionButton';
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
        <h3 className="page-title">Your Jobs</h3>

      </div>
      {/* <FloatingActionButton style={{ float: 'left'}}>
      <ContentAdd />
      </FloatingActionButton> */}
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
