import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ButtonForm from 'components/ButtonForm';
import weakKey from 'weak-key';

const ExperienceResponse = React.createClass({

  render() {
    return <div className="card">
      <Card>
        <CardTitle
          title={`Applicant ${this.props.alias}`}
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
          <ButtonForm/>
        </CardActions>

      </Card>


    </div>
  }
})

export default ExperienceResponse;
