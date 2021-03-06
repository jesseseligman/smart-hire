// eslint-disable-next-line max-len
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import React from 'react';
import Timestamp from 'react-timestamp';
import { browserHistory } from 'react-router';

const EmployerListing = React.createClass({

  handleTouchTapContacts(job) {
    this.props.selectJob(job);

    return this.props.fetchReviewedApplications(job.id);
  },

  handleTouchTapReview(job) {
    this.props.selectJob(job);

    return this.props.fetchUnreviewedApplications(job.id);
  },

  render() {
    const { job } = this.props;
    const location = <div className="posted">
      {`${job.city} - ${job.state}`}
    </div>;
    const posted = <div className="posted">
      Posted: <Timestamp time={job.createdAt} />
    </div>;
    const subheader = <div>{location} {posted} </div>;

    return <div className="card">
      <Card>
        <CardHeader
          children={subheader}
          showExpandableButton={true}
          title={`${job.title}`}
        />

        <CardText>
          This job has {job.unrated.toString()}  unrated applications.
        </CardText>
        <CardText expandable={true}>
          Description: {job.description}
        </CardText>
        <CardActions>
          <FlatButton
            label="View Contacts"
            onTouchTap={() => this.handleTouchTapContacts(job)}
          />
          <FlatButton
            label="Review Applications"
            onTouchTap={() => this.handleTouchTapReview(job)}
          />
        </CardActions>
      </Card>
    </div>;
  }
});

export default EmployerListing;
