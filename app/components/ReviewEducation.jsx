import React from 'react';
import EducationResponse from './EducationResponse';
import weakKey from 'weak-key';

const ReviewEducation = React.createClass({

  render() {
    const data = [
      {
        applicationId: 1,
        edus: [
          {
            id: 1,
            school: 'Harvard',
            degree: 'Bachelors of Science',
            major: 'Biology',
            start: '2004',
            end: '2008'
          },
          {
            id:2,
            school: 'Hard Knocks',
            degree: 'MFA',
            major: 'Writing',
            start: '2904',
            end: '2008'
          }
        ]
      },
      {
        applicationId: 2,
        edus: [
          {
            id: 3,
            school: 'MIT',
            degree: 'Bachelors of Arts',
            major: 'Clown Studies',
            start: '2034',
            end: '2008'
          },
          {
            id: 4,
            school: 'UC Berkely',
            degree: 'Bachelors of Arts',
            major: 'Global Studies',
            start: '2001',
            end: '2008'
          }
        ]
      }
    ];

    return <div className="dashboard-container">
      <h3>Education</h3>
      {data.map((response, index) => {
        return <EducationResponse
          key={weakKey(response)}
          alias={index + 1}
          edus={response.edus}
        />
      })}
    </div>
  }
})

export default ReviewEducation;
