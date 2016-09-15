import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ButtonForm from 'components/ButtonForm';

const EducationResponse = React.createClass({

  render() {
    const { alias, question, response } = this.props;
    return <div className="card">
      <Card>
        <CardTitle
          title={ alias ? `Applicant ${alias}` : question }
        />
        <CardText style={{paddingTop: '0px'}}>
          {response}
        </CardText>

        <CardActions>
          <ButtonForm hidden={this.props.reviewed}/>
        </CardActions>
      </Card>


    </div>
  }
})

export default EducationResponse;
