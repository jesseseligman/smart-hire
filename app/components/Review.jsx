import React from 'react';
import Response from 'components/Response';
import weakKey from 'weak-key';

const Review = React.createClass({

  render() {
    const data = {
      question: 'Why are you a good fit for this position?',
      responses: [
        {
          response: 'Shankle t-bone pork chop, tongue pancetta capicola andouille pork. Hamburger biltong chuck, jowl leberkas pork chop tongue ham meatball. Turducken cow shoulder fatback ball tip beef ribs pork loin, pork chop brisket shankle. Alcatra picanha sirloin kevin bacon. Pig shankle shank picanha rump pork loin alcatra.',
          applicationId: 1
        },
        {
          response: 'Frankfurter tail meatball jowl swine chicken pork belly leberkas cow, corned beef venison pork ball tip. Pig salami sausage chicken ham bacon filet mignon beef ribs t-bone prosciutto turducken swine leberkas. Swine turkey venison prosciutto. Porchetta sausage biltong tenderloin jowl. Kevin corned beef shank porchetta fatback filet mignon. Jerky pastrami fatback tail cupim ground round boudin meatball kielbasa. Alcatra andouille brisket ham hock kevin beef frankfurter meatball chicken prosciutto rump leberkas.',
          applicationId: 2
        },
        {
          response: 'I just accel at everything that I set my mid to so ya know I just really am so great you know what I mean',
          applicationId: 3
        },
        {
          response: 'Cupim jerky sirloin pork bacon. Prosciutto bacon biltong, chicken jerky tongue pancetta. Capicola rump leberkas salami porchetta ham hock meatloaf landjaeger ball tip swine cupim brisket frankfurter pork belly. Alcatra pork chop pork belly, sausage capicola pancetta ham meatball bresaola frankfurter prosciutto jowl. Pancetta andouille tri-tip shoulder, pastrami short ribs corned beef t-bone ham hock jerky pig leberkas chuck. T-bone swine biltong, ham hock capicola pork chop tri-tip bresaola fatback tenderloin rump.',
          applicationId: 4
        },
        {
          response: 'I just accel at everything that I set my mid to so ya know I just really am so great you know what I mean',
          applicationId: 5
        }
      ]
    };

    return <div className="dashboard-container">
      <h3>{data.question}</h3>
      {data.responses.map((response, index) => {
        return <Response
          key={weakKey(response)}
          alias={index + 1}
          response={response.response}
        />
      })}
    </div>
  }
})

export default Review;
