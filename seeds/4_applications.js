'use strict';

exports.seed = function(knex) {
  return knex('applications').del()
    .then(() => {
      return knex('applications').insert([{
        first_name: 'Lester',
        last_name: 'Freeman',
        phone: '4105889898',
        email: 'lesterfreeman@gmail.com',
        overall_score: 4.7,
        job_id: 1,
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        first_name: 'Bunk',
        last_name: 'Moreland',
        phone: '3016028633',
        email: 'bunkybunk@gmail.com',
        overall_score: 3.7,
        job_id: 1,
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        first_name: 'Jimmy',
        last_name: 'McNulty',
        phone: '3019028633',
        email: 'jmcnulty@gmail.com',
        overall_score: 2.8,
        job_id: 1,
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        first_name: 'Kima',
        last_name: 'Gregs',
        phone: '2069872325',
        email: 'kgregs@gmail.com',
        overall_score: 3.3,
        job_id: 1,
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        first_name: 'Ellis',
        last_name: 'Carver',
        phone: '2069872775',
        email: 'ecarver@gmail.com',
        job_id: 1,
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        first_name: 'Frank',
        last_name: 'Sobatka',
        phone: '2069072775',
        email: 'fsobatka@gmail.com',
        job_id: 1,
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        first_name: 'Avon',
        last_name: 'Barksdale',
        phone: '2069072015',
        email: 'abarksdale@gmail.com',
        job_id: 1,
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        first_name: 'Cedric',
        last_name: 'Daniels',
        phone: '3019072015',
        email: 'cdaniels@gmail.com',
        job_id: 1,
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        first_name: 'Bunk',
        last_name: 'Moreland',
        phone: '3016028633',
        email: 'bunkybunk@gmail.com',
        job_id: 2,
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        first_name: 'Jimmy',
        last_name: 'McNulty',
        phone: '3019028633',
        email: 'jmcnulty@gmail.com',
        overall_score: 3.7,
        job_id: 2,
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        first_name: 'Kima',
        last_name: 'Gregs',
        phone: '2069872325',
        email: 'kgregs@gmail.com',
        job_id: 2,
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        first_name: 'Ellis',
        last_name: 'Carver',
        phone: '2069872775',
        email: 'ecarver@gmail.com',
        job_id: 2,
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        first_name: 'Frank',
        last_name: 'Sobatka',
        phone: '2069072775',
        email: 'fsobatka@gmail.com',
        job_id: 2,
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        first_name: 'Avon',
        last_name: 'Barksdale',
        phone: '2069072015',
        email: 'abarksdale@gmail.com',
        job_id: 2,
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        first_name: 'Cedric',
        last_name: 'Daniels',
        phone: '3019072015',
        email: 'cdaniels@gmail.com',
        job_id: 2,
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        first_name: 'Bunk',
        last_name: 'Moreland',
        phone: '3016028633',
        email: 'bunkybunk@gmail.com',
        job_id: 3,
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        first_name: 'Jimmy',
        last_name: 'McNulty',
        phone: '3019028633',
        email: 'jmcnulty@gmail.com',
        job_id: 3,
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        first_name: 'Kima',
        last_name: 'Gregs',
        phone: '2069872325',
        email: 'kgregs@gmail.com',
        job_id: 3,
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        first_name: 'Ellis',
        last_name: 'Carver',
        phone: '2069872775',
        email: 'ecarver@gmail.com',
        job_id: 3,
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        first_name: 'Frank',
        last_name: 'Sobatka',
        phone: '2069072775',
        email: 'fsobatka@gmail.com',
        job_id: 3,
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        first_name: 'Avon',
        last_name: 'Barksdale',
        phone: '2069072015',
        email: 'abarksdale@gmail.com',
        job_id: 3,
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        first_name: 'Cedric',
        last_name: 'Daniels',
        phone: '3019072015',
        email: 'cdaniels@gmail.com',
        overall_score: 3.7,
        job_id: 3,
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      }]);
    });
};
