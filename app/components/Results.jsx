import React from 'react';
import weakKey from 'weak-key';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import { hyphenizePhone } from '../utils';

const Results = React.createClass({

  handleTouchTap(app) {
    this.props.toggleAnonymous(app.id, !app.anonymous);
    this.props.patchAnonymous(app.id, !app.anonymous);
  },

  handleTouchTapApplication(appId) {
    this.props.fetchCompleteApplication(appId);
  },

  render() {

    const { selectedJob } = this.props.jobs;

    return <div className="dashboard-container">
      <h3>{selectedJob.title} - {selectedJob.unrated} unreviewed. Review More</h3>
      <h2>Reviewed Applications</h2>
      <Table selectable={false}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow style={{textAlign: 'center'}}>
            <TableHeaderColumn>Applicant</TableHeaderColumn>
            <TableHeaderColumn>Email</TableHeaderColumn>
            <TableHeaderColumn>Phone</TableHeaderColumn>
            <TableHeaderColumn>Score</TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {this.props.applications.reviewedApplications.map((reviewedApplication) => {
            return <TableRow key={weakKey(reviewedApplication)}>
              <TableRowColumn>
              {reviewedApplication.anonymous ? 'Anonymous' : `${reviewedApplication.firstName} ${reviewedApplication.lastName}`}
              </TableRowColumn>
              <TableRowColumn>
                {reviewedApplication.anonymous ? 'Anonymous' : `${reviewedApplication.email}`}
              </TableRowColumn>
              <TableRowColumn>
                {hyphenizePhone(reviewedApplication.phone)}
              </TableRowColumn>
              <TableRowColumn>
                {reviewedApplication.overallScore.toString()}
              </TableRowColumn>
              <TableRowColumn>
                <FlatButton
                  label={reviewedApplication.anonymous ? 'Show Name' :
                  'Hide Name'}
                  onTouchTap={() => this.handleTouchTap(reviewedApplication)}
                />
              </TableRowColumn>
              <TableRowColumn>
                <FlatButton
                  label="View Application"
                  onTouchTap={() => this.handleTouchTapApplication(reviewedApplication.id)}
                />
              </TableRowColumn>
            </TableRow>
          })}
        </TableBody>
      </Table>
    </div>
  }
})

export default Results;
