'use strict';

exports.seed = function(knex, Promise) {
  return knex('questions').del()
    .then(() => {
      return knex('questions').insert([{
        job_id: 1,
        text: 'Why do you think you would be a good fit for this role?'
      },
      {
        job_id: 1,
        text: 'What are your strengths?'
      },
      {
        job_id: 2,
        text: 'What do you bring to our team?'
      },
      {
        job_id: 2,
        text: 'How do you deal with changing directions?'
      },
      {
        job_id: 3,
        text: 'What are you good at?'
      },
      {
        job_id: 3,
        text: 'If I asked your old boss about you, what would they say?'
      }]);
    })
    // .then(() => {
    //   return knex.raw(
    //     "SELECT setval('questions_id_seq', (SELECT MAX(id) FROM questions));"
    //   );
    // });
};
