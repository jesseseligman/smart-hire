

'use strict';

const environment = process.env.NODE_ENV || 'development';
const knexConfig = {
  client: 'pg',
  connection: 'postgres://localhost/smartHire_dev'
}
const knex = require('knex')(knexConfig);

// const { userId } = req.body;


function getUnrated(jobs, applications) {
  jobs.forEach((job) => {
    job.unrated = 0;

    applications.forEach((application) => {
      if (job.id !== application.job_id || application.overall_score !== null) {
        return;
      }
      job.unrated += 1;
    })
  });
  return jobs;
}

let jobs;
let applications;

knex('jobs')
  .where('user_id', 1)
  .orderBy('created_at')
  .then((rows) => {
    jobs = rows;
    return knex('jobs')
      .select('overall_score', 'job_id')
      .innerJoin('applications', 'jobs.id', 'applications.job_id')
  })
  .then((applications) => {
    getUnrated(jobs, applications);
    console.log(jobs);
    return jobs;
  })
