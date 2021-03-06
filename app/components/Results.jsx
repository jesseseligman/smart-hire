/* eslint-disable max-len */
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
import React from 'react';
import { hyphenizePhone } from '../utils';
import weakKey from 'weak-key';

const Results = React.createClass({

  handleTouchTap(app) {
    this.props.toggleAnonymous(app.id, !app.anonymous);
    this.props.patchAnonymous(app.id, !app.anonymous);
  },

  handleTouchTapApplication(appId) {
    this.props.fetchCompleteApplication(appId);
  },

  handleTouchTapReview() {
    return this.props.fetchUnreviewedApplications(this.props.jobs.selectedJob.id);
  },

  render() {
    const styleScoreWidth = { width: '2em' };
    const styleButtonWidth = { width: '6em' };
    const { selectedJob } = this.props.jobs;

    return <div className="dashboard-container">

      <div className="page-title-conatiner">
        <h3 className="page-title">Reviewed Applications</h3>
        <div>
          <h3 id="job-header">
            {selectedJob.title} - {selectedJob.unrated} unreviewed.
          </h3>
          <div id="review" onTouchTap={this.handleTouchTapReview}>
              Review More
          </div>
        </div>
      </div>

      <Table selectable={false}>
        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
          <TableRow style={{ textAlign: 'center' }}>
            <TableHeaderColumn>Applicant</TableHeaderColumn>
            <TableHeaderColumn>Email</TableHeaderColumn>
            <TableHeaderColumn>Phone</TableHeaderColumn>
            <TableHeaderColumn style={styleScoreWidth}>Score</TableHeaderColumn>
            <TableHeaderColumn style={styleButtonWidth} />
            <TableHeaderColumn />
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
              <TableRowColumn style={styleScoreWidth}>
                {reviewedApplication.overallScore.toString()}
              </TableRowColumn>
              <TableRowColumn style={styleButtonWidth}>
                <FlatButton
                  label={reviewedApplication.anonymous ? 'Show Name' : 'Hide Name'}
                  onTouchTap={() => this.handleTouchTap(reviewedApplication)}
                />
              </TableRowColumn>
              <TableRowColumn>
                <FlatButton
                  label="View Application"
                  onTouchTap={() => this.handleTouchTapApplication(reviewedApplication.id)}
                />
              </TableRowColumn>
            </TableRow>;
          })}
        </TableBody>
      </Table>
    </div>;
  }
});

export default Results;
