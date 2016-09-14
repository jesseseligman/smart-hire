import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ButtonForm from 'components/ButtonForm';

const QuestionResponse = React.createClass({

  render() {
    return <div className="card">
      <Card>
        <CardHeader
          title={`Applicant ${this.props.alias}`}
        />
        <CardText>
          {this.props.response}
        </CardText>

        <ButtonForm/>
      </Card>


    </div>
  }
})

export default QuestionResponse;
