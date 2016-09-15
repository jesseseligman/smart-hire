import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ButtonForm from 'components/ButtonForm';

const EducationResponse = React.createClass({

  render() {
    return <div className="card">
      <Card>
        <CardTitle
          title={`Applicant ${this.props.alias}`}
        />
        <CardText style={{paddingTop: '0px'}}>
          {this.props.response}
        </CardText>

        <CardActions>
          <ButtonForm/>
        </CardActions>
      </Card>


    </div>
  }
})

export default EducationResponse;
