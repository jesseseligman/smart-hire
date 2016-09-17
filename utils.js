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

function separateDates(array) {
  return array.map((element) => {
    const [ start, end ] = element.dates.split('.');

    delete element.dates;

    return Object.assign(element, { start, end });
  })
}

module.exports = { getUnrated, separateDates };
