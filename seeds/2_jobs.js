'use strict';

/* eslint-disable camelcase, max-len */

exports.seed = function(knex) {
  return knex('jobs').del()
    .then(() => {
      return knex('jobs').insert([{
        id: 2,
        title: 'Front End Developer',
        description: 'As a core member of our team, your expertise and passion for code will be crucial to the ongoing success of Pocket Nanner. You will help us to make decisions about what tech we use, where we work, what kind of bananas we buy. We just love bananas. They are foundational to our banana centered mission. We also offer great benefits including free bananas. That\'s the Pocket Nanner way.',
        skills: 'You need to be proficient in Nanner JS as well as Python, React, Angular, PHP, Go, Scala, Perl, and Fortran. If you\'re not an expert in all of these languages do not bother filling out an application. we only take the best at Pocket Nanner.',
        type: 'Web Development',
        city: 'Seattle',
        state: 'WA',
        user_id: 1,
        created_at: new Date('2016-08-14 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 1,
        title: 'Back End Developer',
        description: 'We are looking for a Back-End Web Developer responsible for managing the interchange of data between the server and the users. Your primary focus will be development of all server-side logic, definition and maintenance of the central database, and ensuring high performance and responsiveness to requests from the front-end. You will also be responsible for integrating the front-end elements built by your coworkers into the application. A basic understanding of front-end technologies is therefore necessary as well.',
        type: 'Web Development',
        city: 'San Francisco',
        state: 'CA',
        user_id: 1,
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 3,
        title: 'Horse Trainer',
        description: 'We need someone who can train horses. Not just any horses. Bjorses. Icelandic horses. You might be wondering, "What makes Icelandic horses different?" Good question. Icelandic horses need lots of care. They also need to listen to Bjork on a regular basis. Do you think you can handle it?',
        skills: 'Brushing horses is a huge part of this job. Also shoveling horse poop and feeding them hay.',
        type: 'Labor',
        city: 'Asheville',
        state: 'NC',
        user_id: 2,
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('jobs_id_seq', (SELECT MAX(id) FROM jobs));"
      );
    });
};
