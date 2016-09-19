import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Timestamp from 'react-timestamp';

const EmployerListing = React.createClass({

  handleTouchTapContacts(job) {
    this.props.selectJob(job);
    return this.props.fetchReviewedApplications(job.id);
  },

  render() {

    const { job } = this.props;

    return <div className="card">
      <Card>
        <CardHeader
          title={job.title}
          showExpandableButton={true}
        />
        <h6>Job Posted: <Timestamp time={job.createdAt} /></h6>
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
          />
        </CardActions>
      </Card>
    </div>
  }
})

export default EmployerListing;
