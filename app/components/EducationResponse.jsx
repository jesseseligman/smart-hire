import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ButtonForm from 'components/ButtonForm';
import weakKey from 'weak-key';
import RadioButtons from 'components/RadioButtons';

const EducationResponse = React.createClass({

  handleChange(event, rating) {
    this.props.rateEdus(this.props.appId, rating);
  },

  render() {
    const styleHidden = { display: 'none' };

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
          <RadioButtons
            appId={this.props.appId}
            reviewed={this.props.reviewed}
            handleChange={this.handleChange}
          />
        </CardActions>

      </Card>


    </div>
  }
})

export default EducationResponse;
