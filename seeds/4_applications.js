'use strict';

exports.seed = function(knex) {
  return knex('applications').del()
    .then(() => {
      return knex('applications').insert([{
        first_name: 'Lester',
        last_name: 'Freeman',
        phone: '4105889898',
        email: 'lesterfreeman@gmail.com',
        job_id: 1
      },
      {
        first_name: 'Bunk',
        last_name: 'Moreland',
        phone: '3016028633',
        email: 'bunkybunk@gmail.com',
        job_id: 1
      },
      {
        first_name: 'Jimmy',
        last_name: 'McNulty',
        phone: '3019028633',
        email: 'jmcnulty@gmail.com',
        job_id: 1
      },
      {
        first_name: 'Kima',
        last_name: 'Gregs',
        phone: '2069872325',
        email: 'kgregs@gmail.com',
        job_id: 1
      },
      {
        first_name: 'Ellis',
        last_name: 'Carver',
        phone: '2069872775',
        email: 'ecarver@gmail.com',
        job_id: 1
      },
      {
        first_name: 'Frank',
        last_name: 'Sobatka',
        phone: '2069072775',
        email: 'fsobatka@gmail.com',
        job_id: 1
      },
      {
        first_name: 'Avon',
        last_name: 'Barksdale',
        phone: '2069072015',
        email: 'abarksdale@gmail.com',
        job_id: 1
      },
      {
        first_name: 'Cedric',
        last_name: 'Daniels',
        phone: '3019072015',
        email: 'cdaniels@gmail.com',
        job_id: 1
      },
      {
        first_name: 'Bunk',
        last_name: 'Moreland',
        phone: '3016028633',
        email: 'bunkybunk@gmail.com',
        job_id: 2
      },
      {
        first_name: 'Jimmy',
        last_name: 'McNulty',
        phone: '3019028633',
        email: 'jmcnulty@gmail.com',
        job_id: 2
      },
      {
        first_name: 'Kima',
        last_name: 'Gregs',
        phone: '2069872325',
        email: 'kgregs@gmail.com',
        job_id: 2
      },
      {
        first_name: 'Ellis',
        last_name: 'Carver',
        phone: '2069872775',
        email: 'ecarver@gmail.com',
        job_id: 2
      },
      {
        first_name: 'Frank',
        last_name: 'Sobatka',
        phone: '2069072775',
        email: 'fsobatka@gmail.com',
        job_id: 2
      },
      {
        first_name: 'Avon',
        last_name: 'Barksdale',
        phone: '2069072015',
        email: 'abarksdale@gmail.com',
        job_id: 2
      },
      {
        first_name: 'Cedric',
        last_name: 'Daniels',
        phone: '3019072015',
        email: 'cdaniels@gmail.com',
        job_id: 2
      },
      {
        first_name: 'Bunk',
        last_name: 'Moreland',
        phone: '3016028633',
        email: 'bunkybunk@gmail.com',
        job_id: 3
      },
      {
        first_name: 'Jimmy',
        last_name: 'McNulty',
        phone: '3019028633',
        email: 'jmcnulty@gmail.com',
        job_id: 3
      },
      {
        first_name: 'Kima',
        last_name: 'Gregs',
        phone: '2069872325',
        email: 'kgregs@gmail.com',
        job_id: 3
      },
      {
        first_name: 'Ellis',
        last_name: 'Carver',
        phone: '2069872775',
        email: 'ecarver@gmail.com',
        job_id: 3
      },
      {
        first_name: 'Frank',
        last_name: 'Sobatka',
        phone: '2069072775',
        email: 'fsobatka@gmail.com',
        job_id: 3
      },
      {
        first_name: 'Avon',
        last_name: 'Barksdale',
        phone: '2069072015',
        email: 'abarksdale@gmail.com',
        job_id: 3
      },
      {
        first_name: 'Cedric',
        last_name: 'Daniels',
        phone: '3019072015',
        email: 'cdaniels@gmail.com',
        job_id: 3
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM applications));"
      );
    });
};
