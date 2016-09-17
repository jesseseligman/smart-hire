'use strict';

/* eslint-disable */

exports.seed = function(knex) {
  return knex('edus').del()
    .then(() => {
      return knex('edus').insert([{
        application_id: 1,
        school: 'Harvard',
        degree: 'Bachelors of Science',
        major: 'Biology',
        dates: '02/2004.07/2008',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 1,
        school: 'UC Davis',
        degree: 'MFA',
        major: 'Writing',
        dates: '04/2014.08/2016',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 2,
        school: 'MIT',
        degree: 'Bachelors of Arts',
        major: 'Clown Studies',
        dates: '05/2000.08/2004',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 2,
        school: 'Smith College',
        degree: 'Bachelors of Arts',
        major: 'Global Studies',
        dates: '09/2009.05/2013',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 3,
        school: 'Harvard',
        degree: 'Bachelors of Science',
        major: 'Biology',
        dates: '02/2004.07/2008',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 3,
        school: 'UC Davis',
        degree: 'MFA',
        major: 'Writing',
        dates: '04/2014.08/2016',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 4,
        school: 'MIT',
        degree: 'Bachelors of Arts',
        major: 'Clown Studies',
        dates: '05/2000.08/2004',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 4,
        school: 'Smith College',
        degree: 'Bachelors of Arts',
        major: 'Global Studies',
        dates: '09/2009.05/2013',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 5,
        school: 'Harvard',
        degree: 'Bachelors of Science',
        major: 'Biology',
        dates: '02/2004.07/2008',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 5,
        school: 'UC Davis',
        degree: 'MFA',
        major: 'Writing',
        dates: '04/2014.08/2016',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 6,
        school: 'MIT',
        degree: 'Bachelors of Arts',
        major: 'Clown Studies',
        dates: '05/2000.08/2004',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 6,
        school: 'Smith College',
        degree: 'Bachelors of Arts',
        major: 'Global Studies',
        dates: '09/2009.05/2013',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 7,
        school: 'Harvard',
        degree: 'Bachelors of Science',
        major: 'Biology',
        dates: '02/2004.07/2008',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 7,
        school: 'UC Davis',
        degree: 'MFA',
        major: 'Writing',
        dates: '04/2014.08/2016',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 8,
        school: 'MIT',
        degree: 'Bachelors of Arts',
        major: 'Clown Studies',
        dates: '05/2000.08/2004',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 8,
        school: 'Smith College',
        degree: 'Bachelors of Arts',
        major: 'Global Studies',
        dates: '09/2009.05/2013',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 9,
        school: 'Harvard',
        degree: 'Bachelors of Science',
        major: 'Biology',
        dates: '02/2004.07/2008',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 9,
        school: 'UC Davis',
        degree: 'MFA',
        major: 'Writing',
        dates: '04/2014.08/2016',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 10,
        school: 'MIT',
        degree: 'Bachelors of Arts',
        major: 'Clown Studies',
        dates: '05/2000.08/2004',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 10,
        school: 'Smith College',
        degree: 'Bachelors of Arts',
        major: 'Global Studies',
        dates: '09/2009.05/2013',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 11,
        school: 'Harvard',
        degree: 'Bachelors of Science',
        major: 'Biology',
        dates: '02/2004.07/2008',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 11,
        school: 'UC Davis',
        degree: 'MFA',
        major: 'Writing',
        dates: '04/2014.08/2016',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 12,
        school: 'MIT',
        degree: 'Bachelors of Arts',
        major: 'Clown Studies',
        dates: '05/2000.08/2004',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 12,
        school: 'Smith College',
        degree: 'Bachelors of Arts',
        major: 'Global Studies',
        dates: '09/2009.05/2013',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 13,
        school: 'Harvard',
        degree: 'Bachelors of Science',
        major: 'Biology',
        dates: '02/2004.07/2008',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 13,
        school: 'UC Davis',
        degree: 'MFA',
        major: 'Writing',
        dates: '04/2014.08/2016',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 14,
        school: 'MIT',
        degree: 'Bachelors of Arts',
        major: 'Clown Studies',
        dates: '05/2000.08/2004',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 14,
        school: 'Smith College',
        degree: 'Bachelors of Arts',
        major: 'Global Studies',
        dates: '09/2009.05/2013',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 15,
        school: 'Harvard',
        degree: 'Bachelors of Science',
        major: 'Biology',
        dates: '02/2004.07/2008',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 15,
        school: 'UC Davis',
        degree: 'MFA',
        major: 'Writing',
        dates: '04/2014.08/2016',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 16,
        school: 'MIT',
        degree: 'Bachelors of Arts',
        major: 'Clown Studies',
        dates: '05/2000.08/2004',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 16,
        school: 'Smith College',
        degree: 'Bachelors of Arts',
        major: 'Global Studies',
        dates: '09/2009.05/2013',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 17,
        school: 'Harvard',
        degree: 'Bachelors of Science',
        major: 'Biology',
        dates: '02/2004.07/2008',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 17,
        school: 'UC Davis',
        degree: 'MFA',
        major: 'Writing',
        dates: '04/2014.08/2016',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 18,
        school: 'MIT',
        degree: 'Bachelors of Arts',
        major: 'Clown Studies',
        dates: '05/2000.08/2004',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 18,
        school: 'Smith College',
        degree: 'Bachelors of Arts',
        major: 'Global Studies',
        dates: '09/2009.05/2013',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 19,
        school: 'Harvard',
        degree: 'Bachelors of Science',
        major: 'Biology',
        dates: '02/2004.07/2008',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 19,
        school: 'UC Davis',
        degree: 'MFA',
        major: 'Writing',
        dates: '04/2014.08/2016',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 20,
        school: 'MIT',
        degree: 'Bachelors of Arts',
        major: 'Clown Studies',
        dates: '05/2000.08/2004',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 20,
        school: 'Smith College',
        degree: 'Bachelors of Arts',
        major: 'Global Studies',
        dates: '09/2009.05/2013',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 21,
        school: 'Harvard',
        degree: 'Bachelors of Science',
        major: 'Biology',
        dates: '02/2004.07/2008',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 21,
        school: 'UC Davis',
        degree: 'MFA',
        major: 'Writing',
        dates: '04/2014.08/2016',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 22,
        school: 'MIT',
        degree: 'Bachelors of Arts',
        major: 'Clown Studies',
        dates: '05/2000.08/2004',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        application_id: 22,
        school: 'Smith College',
        degree: 'Bachelors of Arts',
        major: 'Global Studies',
        dates: '09/2009.05/2013',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      }]);
    });
};
