'use strict';

exports.seed = function(knex, Promise) {
  return knex('questions').del()
    .then(() => {
      return knex('questions').insert([{
        id: 1,
        job_id: 1,
        text: 'Why do you think you would be a good fit for this role?',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 2,
        job_id: 1,
        text: 'What are your strengths?',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 3,
        job_id: 2,
        text: 'What do you bring to our team?',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 4,
        job_id: 2,
        text: 'How do you deal with changing directions?',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 5,
        job_id: 3,
        text: 'What are you good at?',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 6,
        job_id: 3,
        text: 'If I asked your old boss about you, what would they say?',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('questions_id_seq', (SELECT MAX(id) FROM questions));"
      );
    });
};
