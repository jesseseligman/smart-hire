import React from 'react';
import weakKey from 'weak-key';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';

const Results = React.createClass({

  getInitialState() {
    return {
      reviewedApplications: [
        {
          score: 4,
          anonymous: true,
          phone: '8283751029',
          email: 'jimmy@mcnulty.com',
          firstName: 'Sally',
          lastName: 'Stanfield'
        },
        {
          score: 1,
          anonymous: false,
          phone: '8283751029',
          email: 'jimmy@mcnulty.com',
          firstName: 'Frank',
          lastName: 'Sobotka'
        },
        {
          score: 2.3,
          anonymous: true,
          phone: '8283751029',
          email: 'jimmy@mcnulty.com',
          firstName: 'Bunk',
          lastName: 'Moreland'
        }
      ]
    }
  },

  handleTouchTap(app) {
    app.anonymous = !app.anonymous;
    const newReviewedApplications = this.state.reviewedApplications.map((element) => {
      if (element !== app) {
        return element;
      }
      const newApp = Object.assign({}, app);
      return newApp;
    });
    this.setState({ reviewedApplications: newReviewedApplications});
  },

  render() {
    const reviewedApplications = [
      {
        score: 4,
        anonymous: true,
        phone: '8283751029',
        email: 'jimmy@mcnulty.com',
        firstName: 'Sally',
        lastName: 'Stanfield'
      },
      {
        score: 1,
        anonymous: false,
        phone: '8283751029',
        email: 'lester@freeman.com',
        firstName: 'Frank',
        lastName: 'Sobotka'
      },
      {
        score: 2.3,
        anonymous: true,
        phone: '8283751029',
        email: 'kima@greggs.com',
        firstName: 'Bunk',
        lastName: 'Moreland'
      }
    ];
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
                {reviewedApplication.phone}
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
