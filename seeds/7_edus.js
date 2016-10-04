'use strict';

/* eslint-disable camelcase, max-len */

exports.seed = function(knex) {
  return knex('edus').del()
    .then(() => {
      return knex('edus').insert([{
        id: 1,
        application_id: 1,
        school: 'Harvard',
        degree: 'Bachelors of Science',
        major: 'Biology',
        dates: '02/2004.07/2008',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 2,
        application_id: 1,
        school: 'UC Davis',
        degree: 'MFA',
        major: 'Writing',
        dates: '04/2014.08/2016',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 3,
        application_id: 2,
        school: 'MIT',
        degree: 'Bachelors of Arts',
        major: 'Clown Studies',
        dates: '05/2000.08/2004',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 4,
        application_id: 2,
        school: 'Smith College',
        degree: 'Bachelors of Arts',
        major: 'Global Studies',
        dates: '09/2009.05/2013',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 5,
        application_id: 3,
        school: 'Harvard',
        degree: 'Bachelors of Science',
        major: 'Biology',
        dates: '02/2004.07/2008',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 6,
        application_id: 3,
        school: 'UC Davis',
        degree: 'MFA',
        major: 'Writing',
        dates: '04/2014.08/2016',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 7,
        application_id: 4,
        school: 'MIT',
        degree: 'Bachelors of Arts',
        major: 'Clown Studies',
        dates: '05/2000.08/2004',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 8,
        application_id: 4,
        school: 'Smith College',
        degree: 'Bachelors of Arts',
        major: 'Global Studies',
        dates: '09/2009.05/2013',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 9,
        application_id: 5,
        school: 'Harvard',
        degree: 'Bachelors of Science',
        major: 'Biology',
        dates: '02/2004.07/2008',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 10,
        application_id: 5,
        school: 'UC Davis',
        degree: 'MFA',
        major: 'Writing',
        dates: '04/2014.08/2016',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 11,
        application_id: 6,
        school: 'MIT',
        degree: 'Bachelors of Arts',
        major: 'Clown Studies',
        dates: '05/2000.08/2004',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 12,
        application_id: 6,
        school: 'Smith College',
        degree: 'Bachelors of Arts',
        major: 'Global Studies',
        dates: '09/2009.05/2013',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 13,
        application_id: 7,
        school: 'Harvard',
        degree: 'Bachelors of Science',
        major: 'Biology',
        dates: '02/2004.07/2008',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 14,
        application_id: 7,
        school: 'UC Davis',
        degree: 'MFA',
        major: 'Writing',
        dates: '04/2014.08/2016',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 15,
        application_id: 8,
        school: 'MIT',
        degree: 'Bachelors of Arts',
        major: 'Clown Studies',
        dates: '05/2000.08/2004',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 16,
        application_id: 8,
        school: 'Smith College',
        degree: 'Bachelors of Arts',
        major: 'Global Studies',
        dates: '09/2009.05/2013',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 17,
        application_id: 9,
        school: 'Harvard',
        degree: 'Bachelors of Science',
        major: 'Biology',
        dates: '02/2004.07/2008',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 18,
        application_id: 9,
        school: 'UC Davis',
        degree: 'MFA',
        major: 'Writing',
        dates: '04/2014.08/2016',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 19,
        application_id: 10,
        school: 'MIT',
        degree: 'Bachelors of Arts',
        major: 'Clown Studies',
        dates: '05/2000.08/2004',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 20,
        application_id: 10,
        school: 'Smith College',
        degree: 'Bachelors of Arts',
        major: 'Global Studies',
        dates: '09/2009.05/2013',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 21,
        application_id: 11,
        school: 'Tufts',
        degree: 'Bachelors of Science',
        major: 'Computer Science',
        dates: '02/2004.07/2008',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 22,
        application_id: 11,
        school: 'UC Davis',
        degree: 'Ph.D.',
        major: 'Computer Science',
        dates: '04/2014.08/2016',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 23,
        application_id: 12,
        school: 'MIT',
        degree: 'Bachelors of Science',
        major: 'Mathematics',
        dates: '05/2000.08/2004',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 24,
        application_id: 12,
        school: 'Smith College',
        degree: 'MFA',
        major: 'Photography',
        dates: '09/2009.05/2013',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 25,
        application_id: 13,
        school: 'Yale',
        degree: 'Bachelors of Science',
        major: 'Physics',
        dates: '02/2004.07/2008',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 26,
        application_id: 13,
        school: 'UC Davis',
        degree: 'MS',
        major: 'Physics',
        dates: '04/2014.08/2016',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 27,
        application_id: 14,
        school: 'MIT',
        degree: 'Bachelors of Arts',
        major: 'Clown Studies',
        dates: '05/2000.08/2004',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 28,
        application_id: 14,
        school: 'Smith College',
        degree: 'Bachelors of Arts',
        major: 'Global Studies',
        dates: '09/2009.05/2013',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 29,
        application_id: 15,
        school: 'University of Maryland',
        degree: 'Bachelors of Science',
        major: 'Chemistry',
        dates: '02/2004.07/2008',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 30,
        application_id: 15,
        school: 'Galvanize',
        degree: 'Web Development Fellow',
        major: 'Computer Science',
        dates: '04/2014.08/2016',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 31,
        application_id: 16,
        school: 'MIT',
        degree: 'Bachelors of Arts',
        major: 'Clown Studies',
        dates: '05/2000.08/2004',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 32,
        application_id: 16,
        school: 'Smith College',
        degree: 'Bachelors of Arts',
        major: 'Global Studies',
        dates: '09/2009.05/2013',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 33,
        application_id: 17,
        school: 'Harvard',
        degree: 'Bachelors of Science',
        major: 'Biology',
        dates: '02/2004.07/2008',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 34,
        application_id: 17,
        school: 'UC Davis',
        degree: 'MFA',
        major: 'Writing',
        dates: '04/2014.08/2016',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 35,
        application_id: 18,
        school: 'MIT',
        degree: 'Bachelors of Arts',
        major: 'Clown Studies',
        dates: '05/2000.08/2004',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 36,
        application_id: 18,
        school: 'Smith College',
        degree: 'Bachelors of Arts',
        major: 'Global Studies',
        dates: '09/2009.05/2013',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 37,
        application_id: 19,
        school: 'Harvard',
        degree: 'Bachelors of Science',
        major: 'Biology',
        dates: '02/2004.07/2008',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 38,
        application_id: 19,
        school: 'UC Davis',
        degree: 'MFA',
        major: 'Writing',
        dates: '04/2014.08/2016',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 39,
        application_id: 20,
        school: 'MIT',
        degree: 'Bachelors of Arts',
        major: 'Clown Studies',
        dates: '05/2000.08/2004',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 40,
        application_id: 20,
        school: 'Smith College',
        degree: 'Bachelors of Arts',
        major: 'Global Studies',
        dates: '09/2009.05/2013',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 41,
        application_id: 21,
        school: 'Harvard',
        degree: 'Bachelors of Science',
        major: 'Biology',
        dates: '02/2004.07/2008',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 42,
        application_id: 21,
        school: 'UC Davis',
        degree: 'MFA',
        major: 'Writing',
        dates: '04/2014.08/2016',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 43,
        application_id: 22,
        school: 'MIT',
        degree: 'Bachelors of Arts',
        major: 'Clown Studies',
        dates: '05/2000.08/2004',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 44,
        application_id: 22,
        school: 'Smith College',
        degree: 'Bachelors of Arts',
        major: 'Global Studies',
        dates: '09/2009.05/2013',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('edus_id_seq', (SELECT MAX(id) FROM edus));"
      );
    });
};
