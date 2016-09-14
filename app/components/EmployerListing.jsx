import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const EmployerListing = React.createClass({
  render() {
    return <div className="card">
      <Card>
        <CardHeader
          title={this.props.jobTitle}
          subtitle={this.props.postDate}
          showExpandableButton={true}
        />
        <CardText>
          This job has {this.props.unrated.toString()}  unrated applications.
        </CardText>
        <CardText expandable={true}>
          Description: {this.props.description}
        </CardText>
        <CardActions>
          <FlatButton label="View Contacts" />
          <FlatButton label="Review Applications" />
        </CardActions>
      </Card>
    </div>
  }
})

export default EmployerListing;
