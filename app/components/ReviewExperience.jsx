import React from 'react';
import ExperienceResponse from './ExperienceResponse';
import weakKey from 'weak-key';

const ReviewExperience = React.createClass({

  render() {
    const data = [
      {
        applicationId: 1,
        exps: [
          {
            id: 1,
            title: 'Principal Analyst',
            company: 'Boeing',
            description: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            start: '2004',
            end: '2008'
          },
          {
            id:2,
            title: 'Project Manager',
            company: 'Synergy Group',
            description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
            start: '2904',
            end: '2008'
          }
        ]
      },
      {
        applicationId: 2,
        exps: [
          {
            id: 3,
            title: 'Plumber',
            company: 'Franklin Plumbing',
            description: 'Lorem ipsum dolor sit amet, nibh molestie neque curabitur, torquent turpis etiam interdum diam. Nec aenean, dictum elit integer vehicula curabitur diam hendrerit, tortor mattis lacus ipsum ut at cras, ultrices sapien pulvinar. In viverra vehicula ultricies, voluptatem ut mattis accumsan aenean cursus metus, nec id ante mauris vel, vulputate nec in a sed scelerisque arcu. Ipsum nulla tincidunt euismod neque nostra nulla. In et. Adipiscing sed orci turpis, quis wisi, maecenas suspendisse est, accumsan eget. Rem eget elit nunc mauris tempus, ipsum metus luctus vivamus eleifend dapibus vestibulum, luctus tincidunt id quam pulvinar egestas vehicula, curabitur vel ipsum quis a mauris ut, in eu sed.',
            start: '2034',
            end: '2008'
          },
          {
            id: 4,
            title: 'Associate Professor of Mathematics',
            company: 'University of Michigan',
            description: 'Lorem ipsum dolor sit amet, nibh molestie neque curabitur, torquent turpis etiam interdum diam. Nec aenean, dictum elit integer vehicula curabitur diam hendrerit, tortor mattis lacus ipsum ut at cras, ultrices sapien pulvinar. In viverra vehicula ultricies, voluptatem ut mattis accumsan aenean cursus metus, nec id ante mauris vel, vulputate nec in a sed scelerisque arcu. Ipsum nulla tincidunt euismod neque nostra nulla. In et. Adipiscing sed orci turpis, quis wisi, maecenas suspendisse est, accumsan eget. Rem eget elit nunc mauris tempus, ipsum metus luctus vivamus eleifend dapibus vestibulum, luctus tincidunt id quam pulvinar egestas vehicula, curabitur vel ipsum quis a mauris ut, in eu sed.',
            start: '2001',
            end: '2008'
          }
        ]
      },
      {
        applicationId: 1,
        exps: [
          {
            id: 1,
            title: 'Principal Analyst',
            company: 'Boeing',
            description: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            start: '2004',
            end: '2008'
          },
          {
            id:2,
            title: 'Project Manager',
            company: 'Synergy Group',
            description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
            start: '2904',
            end: '2008'
          }
        ]
      },
      {
        applicationId: 2,
        exps: [
          {
            id: 3,
            title: 'Plumber',
            company: 'Franklin Plumbing',
            description: 'Lorem ipsum dolor sit amet, nibh molestie neque curabitur, torquent turpis etiam interdum diam. Nec aenean, dictum elit integer vehicula curabitur diam hendrerit, tortor mattis lacus ipsum ut at cras, ultrices sapien pulvinar. In viverra vehicula ultricies, voluptatem ut mattis accumsan aenean cursus metus, nec id ante mauris vel, vulputate nec in a sed scelerisque arcu. Ipsum nulla tincidunt euismod neque nostra nulla. In et. Adipiscing sed orci turpis, quis wisi, maecenas suspendisse est, accumsan eget. Rem eget elit nunc mauris tempus, ipsum metus luctus vivamus eleifend dapibus vestibulum, luctus tincidunt id quam pulvinar egestas vehicula, curabitur vel ipsum quis a mauris ut, in eu sed.',
            start: '2034',
            end: '2008'
          },
          {
            id: 4,
            title: 'Associate Professor of Mathematics',
            company: 'University of Michigan',
            description: 'Lorem ipsum dolor sit amet, nibh molestie neque curabitur, torquent turpis etiam interdum diam. Nec aenean, dictum elit integer vehicula curabitur diam hendrerit, tortor mattis lacus ipsum ut at cras, ultrices sapien pulvinar. In viverra vehicula ultricies, voluptatem ut mattis accumsan aenean cursus metus, nec id ante mauris vel, vulputate nec in a sed scelerisque arcu. Ipsum nulla tincidunt euismod neque nostra nulla. In et. Adipiscing sed orci turpis, quis wisi, maecenas suspendisse est, accumsan eget. Rem eget elit nunc mauris tempus, ipsum metus luctus vivamus eleifend dapibus vestibulum, luctus tincidunt id quam pulvinar egestas vehicula, curabitur vel ipsum quis a mauris ut, in eu sed.',
            start: '2001',
            end: '2008'
          }
        ]
      },
      {
        applicationId: 1,
        exps: [
          {
            id: 1,
            title: 'Principal Analyst',
            company: 'Boeing',
            description: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            start: '2004',
            end: '2008'
          },
          {
            id:2,
            title: 'Project Manager',
            company: 'Synergy Group',
            description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
            start: '2904',
            end: '2008'
          }
        ]
      }
    ];

    return <div className="dashboard-container">
      <h3>Experience</h3>
      {data.map((response, index) => {
        return <ExperienceResponse
          key={weakKey(response)}
          alias={index + 1}
          exps={response.exps}
        />
      })}
    </div>
  }
})

export default ReviewExperience;
