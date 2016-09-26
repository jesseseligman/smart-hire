'use strict';

/* eslint-disable camelcase, no-negated-condition */

const getUnrated = (jobs, applications) => {
  jobs.forEach((job) => {
    job.unrated = 0;

    applications.forEach((application) => {
      if (job.id !== application.job_id || application.overall_score !== null) {
        return;
      }

      job.unrated += 1;
    });
  });

  return jobs;
};

const separateDates = (array) => {
  return array.map((element) => {
    const [start, end] = element.dates.split('.');

    delete element.dates;

    return Object.assign(element, { start, end });
  });
};

const alreadyContains = (applications, appId) => {
  for (const application of applications) {
    if (application.application_id === appId) {
      return applications.indexOf(application);
    }
  }

  return false;
};

const combineEdus = (array) => {
  const result = [];

  for (const element of array) {
    const resultIndex = alreadyContains(result, element.application_id);

    if (resultIndex !== false) {
      delete element.application_id;

      result[resultIndex].edus.push(element);
    }
    else {
      result.push({ application_id: element.application_id });
      delete element.application_id;

      result[result.length - 1].edus = [element];
    }
  }

  return result;
};

const combineExps = (array) => {
  const result = [];

  for (const element of array) {
    const resultIndex = alreadyContains(result, element.application_id);

    if (resultIndex !== false) {
      delete element.application_id;

      result[resultIndex].exps.push(element);
    }
    else {
      result.push({ application_id: element.application_id });
      delete element.application_id;

      result[result.length - 1].exps = [element];
    }
  }

  return result;
};

module.exports = { getUnrated,
                   separateDates,
                   alreadyContains,
                   combineEdus,
                   combineExps
                 };
