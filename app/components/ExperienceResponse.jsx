// eslint-disable-next-line max-len
import { Card, CardActions, CardHeader, CardText, CardTitle } from 'material-ui/Card';
import RadioButtons from 'components/RadioButtons';
import React from 'react';
import weakKey from 'weak-key';

const ExperienceResponse = React.createClass({

  handleChange(event, rating) {
    this.props.rateExps(this.props.appId, rating);
  },

  render() {
    return <div className="card">
      <Card>
        <CardTitle

          // eslint-disable-next-line max-len
          title={this.props.alias ? `Applicant ${this.props.alias}` : 'Experience'}
        />

        {this.props.exps.map((exp) => {
          return <div className="response-item" key={weakKey(exp)}>
            <CardHeader
              subtitle={exp.company}
              title={exp.title}
            >
              <div>{`${exp.start} - ${exp.end}`}</div>
            </CardHeader>
            <CardText
              style={{ paddingTop: '0px' }}
            >
              {exp.description}
            </CardText>
          </div>;
        })}

        <CardActions>
          <RadioButtons
            appId={this.props.appId}
            onChange={this.handleChange}
            reviewed={this.props.reviewed}
            rating={this.props.rating}
          />
        </CardActions>
      </Card>

    </div>;
  }
});

export default ExperienceResponse;
