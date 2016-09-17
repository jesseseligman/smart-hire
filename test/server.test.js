'use strict';

process.env.NODE_ENV = 'test';

const { suite, test } = require('mocha');
const app = require('../server');
const knex = require('../knex');
const supertest = require('supertest');
createdAt: new Date('2016-08-13 13:00:00 UTC').toISOString()

suite('users routes', () => {
  before((done) => {
    knex.migrate.latest()
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
    } );
  });

  beforeEach((done) => {
    knex.seed.run()
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('GET /api/users/1/jobs', (done) => {
    supertest(app)
      .get('/api/users/1/jobs')
      .expect(200, [  {
          id: 2,
          title: 'Back End Developer',
          description: 'As a core member of our team, your expertise and passion for code will be crucial to the ongoing success of Pocket Nanner. You will help us to make decisions about what tech we use, where we work, what kind of bananas we buy. We just love bananas. They are foundational to our banana centered mission. We also offer great benefits including free bananas. That\'s the Pocket Nanner way.',
          skills: 'You need to be proficient in Nanner JS as well as Python, React, Angular, PHP, Go, Scala, Perl, and Fortran. If you\'re not an expert in all of these languages do not bother filling out an application. we only take the best at Pocket Nanner.',
          type: 'Web Development',
          city: 'San Francisco',
          state: 'CA',
          userId: 1,
          createdAt: new Date('2016-08-15 14:26:16 UTC').toISOString(),
          updatedAt: new Date('2016-08-15 14:26:16 UTC').toISOString(),
          unrated: 7
        },
         {
          id: 1,
          title: 'Front End Developer',
          description: 'As a core member of our team, your expertise and passion for code will be crucial to the ongoing success of Pocket Nanner. You will help us to make decisions about what tech we use, where we work, what kind of bananas we buy. We just love bananas. They are foundational to our banana centered mission. We also offer great benefits including free bananas. That\'s the Pocket Nanner way.',
          skills: 'You need to be proficient in Nanner JS as well as Python, React, Angular, PHP, Go, Scala, Perl, and Fortran. If you\'re not an expert in all of these languages do not bother filling out an application. we only take the best at Pocket Nanner.',
          type: 'Web Development',
          city: 'Seattle',
          state: 'WA',
          userId: 1,
          createdAt: new Date('2016-08-15 14:26:16 UTC').toISOString(),
          updatedAt: new Date('2016-08-15 14:26:16 UTC').toISOString(),
          unrated: 8 } ])
      .expect('Content-Type', /json/)
      .end(done);
  });
});
