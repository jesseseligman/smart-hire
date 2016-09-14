import React from 'react';
import EmployerListing from 'components/EmployerListing';
import weakKey from 'weak-key';

const Dashboard = React.createClass({

  render() {

    const listings = [
      {
        jobTitle: 'Senior Engineer',
        postDate: 'Posted 16 days ago.',
        unrated: 6,
        description: 'We are seeking a creative engineer to join a fast paced team. If you love building highly scalable and testable software we want to talk to you. You need to have experience with back end technologies and like Node, Python, PHP or something similar.'
      },
      {
        jobTitle: 'Junior Engineer',
        postDate: 'Posted 11 days ago.',
        unrated: 12,
        description: 'We are seeking a creative engineer to join a fast paced team. If you love building highly scalable and testable software we want to talk to you. You need to have experience with back end technologies and like Node, Python, PHP or something similar.'
      }
    ];
    return <div className="dashboard-container">
      {listings.map((listing) => {
        return <EmployerListing
          key={weakKey(listing)}
          jobTitle={listing.jobTitle}
          postDate={listing.postDate}
          unrated={listing.unrated}
          description={listing.description}
        />
      })}
    </div>
  }
})

export default Dashboard;
