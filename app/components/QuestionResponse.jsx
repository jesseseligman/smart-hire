// import React from 'react';
// import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import ButtonForm from 'components/ButtonForm';
//
// const QuestionResponse = React.createClass({
//
//   render() {
//     return <div className="card">
//       <Card>
//         <CardTitle
//           title={`Applicant ${this.props.alias}`}
//         />
//
//         {this.props.edus.map((edu) => {
//           return <div>
//             <CardHeader
//               title={edu.school}
//               subtitle={`${edu.degree}, ${edu.major}`}
//               />
//           </div>
//         })}
//         <CardActions>
//           <ButtonForm/>
//         </CardActions>
//
//       </Card>
//
//
//     </div>
//   }
// })
//
// export default QuestionResponse;
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
        <CardText>
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
