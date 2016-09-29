'use strict';

/* eslint-disable camelcase, max-len */

exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        id: 1,
        email: 'bbrophy@gmail.com',
        hashed_password: '$2a$12$R1XJdA5ylyGp6autB4jteeq3EEy9T8ZkC3QED8lTIC6.8s9n3NwU6',
        first_name: 'Shane',
        last_name: 'Quest',
        phone: '8289871902',
        state: 'MD',
        city: 'Baltimore',
        company_name: 'Pocket Nanner',
        company_description: 'We\'re changing the way that people carry bananas. We\'re totally disrupting the industry. It\'s incredible what we have been able to do in just a few years.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 2,
        email: 'blainelovescigs@cigs.com',
        hashed_password: '$2a$12$R1XJdA5ylyGp6autB4jteeq3EEy9T8ZkC3QED8lTIC6.8s9n3NwU6',
        first_name: 'Blaine',
        last_name: 'Stewart',
        phone: '2069871902',
        state: 'WA',
        city: 'Seattle',
        company_name: 'Bjorse',
        company_description: 'Bjorse is bringing Icelandic horses into the 21st century. We believe that the combined power of Bjork, horses, and geothermal can change the world. We are disrupting the icelandic draft horse market, a 5 trillion dollar economy.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    });
};
