import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ButtonForm from 'components/ButtonForm';
import weakKey from 'weak-key';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const ExperienceResponse = React.createClass({

  handleChange(event, rating) {
    this.props.rateExps(this.props.appId, rating);
  },

  render() {
    return <div className="card">
      <Card>
        <CardTitle
          title={this.props.alias ? `Applicant ${this.props.alias}` : 'Experience'}
        />

        {this.props.exps.map((exp) => {
          return <div className="response-item" key={weakKey(exp)}>
            <CardHeader
              title={exp.title}
              subtitle={exp.company}
            >
              <div>{`${exp.start} - ${exp.end}`}</div>
            </CardHeader>
            <CardText
              style={{paddingTop: '0px'}}
            >
              {exp.description}
            </CardText>
          </div>
        })}

        <CardActions>
          <RadioButtonGroup
            name={`exp${this.props.appId}`}
            onChange={this.handleChange}
            >
            <RadioButton
              value={1}
              label="1"
            />
            <RadioButton
              value={2}
              label="2"
            />
            <RadioButton
              value={3}
              label="3"
            />
            <RadioButton
              value={4}
              label="4"
            />
            <RadioButton
              value={5}
              label="5"
            />
          </RadioButtonGroup>
          {/* <ButtonForm hidden={this.props.reviewed}/> */}
        </CardActions>

      </Card>


    </div>
  }
})

export default ExperienceResponse;
