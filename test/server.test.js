'use strict';

process.env.NODE_ENV = 'test';

const { suite, test } = require('mocha');
const app = require('../server');
const knex = require('../knex');
const supertest = require('supertest');


suite('jobs routes', () => {
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

  test('GET /api/jobs/1', (done) => {
    supertest(app)
      .get('/api/jobs/1')
      .expect(200, [
        {
          id: 1,
          title: 'Front End Developer',
          description: 'As a core member of our team, your expertise and passion for code will be crucial to the ongoing success of Pocket Nanner. You will help us to make decisions about what tech we use, where we work, what kind of bananas we buy. We just love bananas. They are foundational to our banana centered mission. We also offer great benefits including free bananas. That\'s the Pocket Nanner way.',
          skills: 'You need to be proficient in Nanner JS as well as Python, React, Angular, PHP, Go, Scala, Perl, and Fortran. If you\'re not an expert in all of these languages do not bother filling out an application. we only take the best at Pocket Nanner.',
          type: 'Web Development',
          city: 'Seattle',
          state: 'WA',
          userId: 1,
          createdAt: new Date('2016-08-14 14:26:16 UTC').toISOString(),
          updatedAt: new Date('2016-08-15 14:26:16 UTC').toISOString(),
          unrated: 4
        },
        {
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
          unrated: 6
        }
        ])
      .expect('Content-Type', /json/)
      .end(done);
  });
});

suite('applications routes', () => {
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

  test('GET /api/applications/rated/3', (done) => {
    supertest(app)
      .get('/api/applications/rated/3')
      .expect(200, [
      {
        "anonymous": true,
        "createdAt": "2016-08-19T14:26:16.000Z",
        "edusRating": null,
        "email": "cdaniels@gmail.com",
        "expsRating": null,
        "firstName": "Cedric",
        "id": 22,
        "jobId": 3,
        "lastName": "Daniels",
        "overallScore": "3.7",
        "phone": "3019072015",
        "updatedAt": "2016-08-15T14:26:16.000Z"
      }
    ])
    .expect('Content-Type', /json/)
    .end(done);
  })

  test('GET /api/applications/unrated/3', (done) => {
    supertest(app)
      .get('/api/applications/unrated/3')
      .expect(200, [
      {
        "anonymous": true,
        "createdAt": "2016-08-01T14:26:16.000Z",
        "edusRating": null,
        "email": "kgregs@gmail.com",
        "expsRating": null,
        "firstName": "Kima",
        "id": 18,
        "jobId": 3,
        "lastName": "Gregs",
        "overallScore": null,
        "phone": "2069872325",
        "updatedAt": "2016-08-15T14:26:16.000Z"
      },
      {
        "anonymous": true,
        "createdAt": "2016-08-05T14:26:16.000Z",
        "edusRating": null,
        "email": "ecarver@gmail.com",
        "expsRating": null,
        "firstName": "Ellis",
        "id": 19,
        "jobId": 3,
        "lastName": "Carver",
        "overallScore": null,
        "phone": "2069872775",
        "updatedAt": "2016-08-15T14:26:16.000Z"
      },
      {
        "anonymous": true,
        "createdAt": "2016-08-10T14:26:16.000Z",
        "edusRating": null,
        "email": "abarksdale@gmail.com",
        "expsRating": null,
        "firstName": "Avon",
        "id": 21,
        "jobId": 3,
        "lastName": "Barksdale",
        "overallScore": null,
        "phone": "2069072015",
        "updatedAt": "2016-08-15T14:26:16.000Z"
      },
      {
        "anonymous": true,
        "createdAt": "2016-08-30T14:26:16.000Z",
        "edusRating": null,
        "email": "fsobatka@gmail.com",
        "expsRating": null,
        "firstName": "Frank",
        "id": 20,
        "jobId": 3,
        "lastName": "Sobatka",
        "overallScore": null,
        "phone": "2069072775",
        "updatedAt": "2016-08-15T14:26:16.000Z"
      },
      {
        "anonymous": true,
        "createdAt": "2016-09-05T14:26:16.000Z",
        "edusRating": null,
        "email": "bunkybunk@gmail.com",
        "expsRating": null,
        "firstName": "Bunk",
        "id": 16,
        "jobId": 3,
        "lastName": "Moreland",
        "overallScore": null,
        "phone": "3016028633",
        "updatedAt": "2016-08-15T14:26:16.000Z"
      }
      ])
      .expect('Content-Type', /json/)
      .end(done);
  });

  test('GET /api/applications/5', (done) => {
    supertest(app)
      .get('/api/applications/5')
      .expect(200,
        {
          "anonymous": true,
          "createdAt": "2016-08-15T14:26:56.000Z",
          "edus": [
            {
              "applicationId": 5,
              "createdAt": "2016-08-15T14:26:16.000Z",
              "degree": "Bachelors of Science",
              "end": "07/2008",
              "id": 9,
              "major": "Biology",
              "school": "Harvard",
              "start": "02/2004",
              "updatedAt": "2016-08-15T14:26:16.000Z"
            },
            {
              "applicationId": 5,
              "createdAt": "2016-08-15T14:26:16.000Z",
              "degree": "MFA",
              "end": "08/2016",
              "id": 10,
              "major": "Writing",
              "school": "UC Davis",
              "start": "04/2014",
              "updatedAt": "2016-08-15T14:26:16.000Z"
            }
          ],
          "edusRating": null,
          "email": "ecarver@gmail.com",
          "exps": [
            {
              "applicationId": 5,
              "company": "Synergy Group",
              "createdAt": "2016-08-15T14:26:16.000Z",
              "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
              "end": "05/2011",
              "id": 10,
              "start": "01/2009",
              "title": "Project Manager",
              "updatedAt": "2016-08-15T14:26:16.000Z"
            },
            {
              "applicationId": 5,
              "company": "Boeing",
              "createdAt": "2016-08-15T14:26:16.000Z",
              "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              "end": "10/2008",
              "id": 9,
              "start": "03/2004",
              "title": "Principal Analyst",
              "updatedAt": "2016-08-15T14:26:16.000Z"
            }
          ],
          "expsRating": null,
          "firstName": "Ellis",
          "id": 5,
          "jobId": 1,
          "lastName": "Carver",
          "overallScore": null,
          "phone": "2069872775",
          "responses": [
            {
              "question": "Why do you think you would be a good fit for this role?",
              "response": "I am a great fit for this role. I am a self starter. I do all of the things they say to do in the self help books. What makes me such a good fit is that I can change sizes. I also like clean, elegant code. No need to be overly robust with the syntactic sugar. That is why I am a great fit for this role because I am just such a great fit for this role."
            },
            {
              "question": "What are your strengths?",
              "response": "My strengths are that I know my weaknesses. That is what makes me so special. I also have invented a number of life saving technologies. I am fluent in 43 languages. I don't need to sleep. I can sing three operas from memory. You never need to tell me to do something twice. I love work and I am a workaholic and that is all I care about!"
            }
          ],
          "updatedAt": "2016-08-15T14:26:16.000Z"
        })
        .expect('Content-Type', /json/)
        .end(done);
      });
});
