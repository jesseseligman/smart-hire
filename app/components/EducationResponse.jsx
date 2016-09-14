import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ButtonForm from 'components/ButtonForm';
import weakKey from 'weak-key';

const EducationResponse = React.createClass({

  render() {
    return <div className="card">
      <Card>
        <CardTitle
          title={`Applicant ${this.props.alias}`}
        />

        {this.props.edus.map((edu) => {
          return <div key={weakKey(edu)}>
            <CardHeader
              title={`${edu.school} -- ${edu.degree}, ${edu.major}`}
              subtitle={`${edu.start} - ${edu.end}`}
              />
          </div>
        })}

        <CardActions>
          <ButtonForm/>
        </CardActions>

      </Card>


    </div>
  }
})

export default EducationResponse;
