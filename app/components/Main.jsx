import React from 'react';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

const Main = React.createClass({

  getInitialState() {
    return {
      currentApplication: {
        firstName: 'Cedric',
        lastName: 'Daniels',
        phone: '410-459-3020',
        email: 'cedricdaniels@bpd.gov',
        anonymous: false,
        overallRating: 3.2,
        exps: {
          rating: 4,
          exps: [{
            id: 1,
            title: 'Principal Analyst',
            company: 'Boeing',
            description: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            start: '2004',
            end: '2008'
          },
          {
            id: 2,
            title: 'Project Manager',
            company: 'Synergy Group',
            description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
            start: '2904',
            end: '2008'
          }]
        },
        edus: {
          rating: 4,
            edus: [{
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
            }]
        },
        responses: [
          {
            question: 'Why are you a good fit for this position?',
            response: 'Frankfurter tail meatball jowl swine chicken pork belly leberkas cow, corned beef venison pork ball tip. Pig salami sausage chicken ham bacon filet mignon beef ribs t-bone prosciutto turducken swine leberkas. Swine turkey venison prosciutto. Porchetta sausage biltong tenderloin jowl. Kevin corned beef shank porchetta fatback filet mignon. Jerky pastrami fatback tail cupim ground round boudin meatball kielbasa. Alcatra andouille brisket ham hock kevin beef frankfurter meatball chicken prosciutto rump leberkas.',
            rating: 4
          },
          {
            question: 'What are your greatest strengths?',
            response: 'Cupim jerky sirloin pork bacon. Prosciutto bacon biltong, chicken jerky tongue pancetta. Capicola rump leberkas salami porchetta ham hock meatloaf landjaeger ball tip swine cupim brisket frankfurter pork belly. Alcatra pork chop pork belly, sausage capicola pancetta ham meatball bresaola frankfurter prosciutto jowl. Pancetta andouille tri-tip shoulder, pastrami short ribs corned beef t-bone ham hock jerky pig leberkas chuck. T-bone swine biltong, ham hock capicola pork chop tri-tip bresaola fatback tenderloin rump.',
            rating: 2
          },
          {
            question: 'How do you deal with meeting strict deadlines?',
            response: 'Lorem ipsum dolor sit amet, nibh molestie neque curabitur, torquent turpis etiam interdum diam. Nec aenean, dictum elit integer vehicula curabitur diam hendrerit, tortor mattis lacus ipsum ut at cras, ultrices sapien pulvinar. In viverra vehicula ultricies, voluptatem ut mattis accumsan aenean cursus metus, nec id ante mauris vel, vulputate nec in a sed scelerisque arcu. Ipsum nulla tincidunt euismod neque nostra nulla. In et. Adipiscing sed orci turpis, quis wisi, maecenas suspendisse est, accumsan eget. Rem eget elit nunc mauris tempus, ipsum metus luctus vivamus eleifend dapibus vestibulum, luctus tincidunt id quam pulvinar egestas vehicula, curabitur vel ipsum quis a mauris ut, in eu sed.'
          }
        ]
      }
    }
  },

  toggleAnonymous() {
    const { currentApplication } = this.state;

    currentApplication.anonymous = !currentApplication.anonymous;

    const nextCurrentApplication = Object.assign({}, currentApplication);

    this.setState({currentApplication: nextCurrentApplication});
  },

  render() {

    const styleHamburger = {
      mediumIcon: {
        width: 48,
        height: 48,
      },
      medium: {
        width: 96,
        height: 96,
        padding: 24,
      },
    };

    const styleButton = {
      fontWeight: 'lighter'
    };

    return <div>
      <nav id="nav-bar">
        <Link to={'/'}>
          <div id="logo">Smart Hire</div>
        </Link>

        <div id="hamburger">
          <IconButton
            iconStyle={styleHamburger.mediumIcon}
            style={styleHamburger.medium}
          >
            <NavigationMenu color={'#F9FDFE'} />
          </IconButton>
        </div>

        <div id="nav-button-container">
          <Link to={'/register'}>
            <FlatButton
              label="Sign Up"
              labelStyle={styleButton}
              style={{color: '#F9FDFE'}}
            />
          </Link>
          <Link to={'/login'}>
            <FlatButton
              label="Login"
              labelStyle={styleButton}
              style={{color: '#F9FDFE'}}
            />
          </Link>
          <Link>
            <FlatButton
              label="Find a job"
              labelStyle={styleButton}
              style={{color: '#F9FDFE'}}
            />
          </Link>
        </div>
      </nav>

      {React.cloneElement(this.props.children, {
        jobTitle: 'Senior Engineer',
        unrated: 6,
        reviewedApplication: this.state.currentApplication,
        toggleAnonymous: this.toggleAnonymous
      })}
    </div>
  }
});



export default Main;
