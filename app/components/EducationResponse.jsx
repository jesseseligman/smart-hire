import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ButtonForm from 'components/ButtonForm';
import weakKey from 'weak-key';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const EducationResponse = React.createClass({

  handleChange(event, rating) {
    this.props.rateEdus(this.props.appId, rating);
  },

  render() {
    return <div className="card">
      <Card>
        <CardTitle
          title={this.props.alias ? `Applicant ${this.props.alias}` : 'Education'}
        />

        {this.props.edus.map((edu) => {
          return <div key={weakKey(edu)}>
            <CardHeader
              style={{paddingTop: '0px'}}
              title={`${edu.school} -- ${edu.degree}, ${edu.major}`}
              subtitle={`${edu.start} - ${edu.end}`}
              />
          </div>
        })}

        <CardActions>
          <RadioButtonGroup
            name={`edu${this.props.appId}`}
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

export default EducationResponse;
