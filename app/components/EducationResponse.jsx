// eslint-disable-next-line max-len
import { Card, CardActions, CardHeader, CardTitle } from 'material-ui/Card';
import RadioButtons from 'components/RadioButtons';
import React from 'react';
import weakKey from 'weak-key';

const EducationResponse = React.createClass({

  handleChange(event, rating) {
    this.props.rateEdus(this.props.appId, rating);
  },

  render() {
    return <div className="card">
      <Card>
        <CardTitle

          // eslint-disable-next-line max-len
          title={this.props.alias ? `Applicant ${this.props.alias}` : 'Education'}
        />

        {this.props.edus.map((edu) => {
          return <div key={weakKey(edu)}>
            <CardHeader
              style={{ paddingTop: '0px' }}
              subtitle={`${edu.start} - ${edu.end}`}
              title={`${edu.school} -- ${edu.degree}, ${edu.major}`}
            />
          </div>;
        })}

        <CardActions>
          <RadioButtons
            appId={this.props.appId}
            onChange={this.handleChange}
            reviewed={this.props.reviewed}
          />
        </CardActions>

      </Card>
    </div>;
  }
});

export default EducationResponse;
