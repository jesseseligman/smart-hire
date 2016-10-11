'use strict';

/* eslint-disable camelcase, max-len */

exports.seed = function(knex) {
  return knex('applications').del()
    .then(() => {
      return knex('applications').insert([{
        id: 1,
        first_name: 'Lester',
        last_name: 'Freeman',
        phone: '4105889898',
        email: 'lesterfreeman@gmail.com',
        overall_score: 4.7,
        job_id: 1,
        created_at: new Date('2016-08-14 14:36:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 2,
        first_name: 'Bunk',
        last_name: 'Moreland',
        phone: '3016028633',
        email: 'bunkybunk@gmail.com',
        overall_score: 3.7,
        job_id: 1,
        created_at: new Date('2016-08-15 18:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 3,
        first_name: 'Jimmy',
        last_name: 'McNulty',
        phone: '3019028633',
        email: 'jmcnulty@gmail.com',
        overall_score: 2.8,
        job_id: 1,
        created_at: new Date('2016-08-15 17:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 4,
        first_name: 'Kima',
        last_name: 'Gregs',
        phone: '2069872325',
        email: 'kgregs@gmail.com',
        overall_score: 3.3,
        job_id: 1,
        created_at: new Date('2016-08-15 14:16:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 5,
        first_name: 'Ellis',
        last_name: 'Carver',
        phone: '2069872775',
        email: 'ecarver@gmail.com',
        job_id: 1,
        created_at: new Date('2016-08-15 14:26:56 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 6,
        first_name: 'Frank',
        last_name: 'Sobatka',
        phone: '2069072775',
        email: 'fsobatka@gmail.com',
        job_id: 1,
        created_at: new Date('2016-08-15 14:26:46 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 7,
        first_name: 'Avon',
        last_name: 'Barksdale',
        phone: '2069072015',
        email: 'abarksdale@gmail.com',
        job_id: 1,
        created_at: new Date('2016-08-15 14:26:22 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 8,
        first_name: 'Cedric',
        last_name: 'Daniels',
        phone: '3019072015',
        email: 'cdaniels@gmail.com',
        job_id: 1,
        created_at: new Date('2016-08-15 14:26:17 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 9,
        first_name: 'Bunk',
        last_name: 'Moreland',
        phone: '3016028633',
        email: 'bunkybunk@gmail.com',
        overall_score: 3.4,
        job_id: 2,
        created_at: new Date('2016-08-15 14:26:18 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 10,
        first_name: 'Jimmy',
        last_name: 'McNulty',
        phone: '3019028633',
        email: 'jmcnulty@gmail.com',
        overall_score: 3.7,
        job_id: 2,
        created_at: new Date('2016-08-15 14:26:06 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 11,
        first_name: 'Kima',
        last_name: 'Gregs',
        phone: '2069872325',
        email: 'kgregs@gmail.com',
        overall_score: 4.2,
        job_id: 2,
        created_at: new Date('2016-08-15 11:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 12,
        first_name: 'Ellis',
        last_name: 'Carver',
        phone: '2069872775',
        email: 'ecarver@gmail.com',
        overall_score: 2.4,
        job_id: 2,
        created_at: new Date('2016-08-15 13:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 13,
        first_name: 'Frank',
        last_name: 'Sobatka',
        phone: '2069072775',
        email: 'fsobatka@gmail.com',
        job_id: 2,
        created_at: new Date('2016-08-15 14:36:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 14,
        first_name: 'Avon',
        last_name: 'Barksdale',
        phone: '2069072015',
        email: 'abarksdale@gmail.com',
        overall_score: 3.4,
        job_id: 2,
        created_at: new Date('2016-08-16 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 15,
        first_name: 'Sarah',
        last_name: 'Daniels',
        phone: '3019072015',
        email: 'sdaniels@gmail.com',
        job_id: 2,
        created_at: new Date('2016-07-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 16,
        first_name: 'Bunk',
        last_name: 'Moreland',
        phone: '3016028633',
        email: 'bunkybunk@gmail.com',
        job_id: 3,
        created_at: new Date('2016-09-5 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 17,
        first_name: 'Jimmy',
        last_name: 'McNulty',
        phone: '3019028633',
        email: 'jmcnulty@gmail.com',
        job_id: 3,
        created_at: new Date('2016-09-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 18,
        first_name: 'Kima',
        last_name: 'Gregs',
        phone: '2069872325',
        email: 'kgregs@gmail.com',
        job_id: 3,
        created_at: new Date('2016-08-1 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 19,
        first_name: 'Ellis',
        last_name: 'Carver',
        phone: '2069872775',
        email: 'ecarver@gmail.com',
        job_id: 3,
        created_at: new Date('2016-08-5 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 20,
        first_name: 'Frank',
        last_name: 'Sobatka',
        phone: '2069072775',
        email: 'fsobatka@gmail.com',
        job_id: 3,
        created_at: new Date('2016-08-30 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 21,
        first_name: 'Avon',
        last_name: 'Barksdale',
        phone: '2069072015',
        email: 'abarksdale@gmail.com',
        job_id: 3,
        created_at: new Date('2016-08-10 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 22,
        first_name: 'Cedric',
        last_name: 'Daniels',
        phone: '3019072015',
        email: 'cdaniels@gmail.com',
        overall_score: 3.7,
        job_id: 3,
        created_at: new Date('2016-08-19 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('applications_id_seq', (SELECT MAX(id) FROM applications));"
      );
    });
};
