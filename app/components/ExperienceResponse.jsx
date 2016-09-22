import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ButtonForm from 'components/ButtonForm';
import weakKey from 'weak-key';
import RadioButtons from 'components/RadioButtons';


const ExperienceResponse = React.createClass({

  handleChange(event, rating) {
    this.props.rateExps(this.props.appId, rating);
  },

  render() {
    const styleHidden = { display: 'none' };

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
          <RadioButtons
            appId={this.props.appId}
            style={this.props.reviewed ? styleHidden : {}}
            handleChange={this.handleChange}
          />
        </CardActions>

      </Card>


    </div>
  }
})

export default ExperienceResponse;
