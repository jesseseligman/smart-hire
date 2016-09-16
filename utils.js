'use strict';

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
  console.log(jobs);
  return jobs;
}

module.exports = { getUnrated };
