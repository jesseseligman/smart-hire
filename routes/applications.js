'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const ev = require('express-validation');
// const validations = require('../validations/applications');
const { camelizeKeys, decamelizeKeys } = require('humps');
// const { checkAuth } = require('../middleware');
const { separateDates } = require('../utils');

const router = express.Router(); // eslint-disable-line new-cap
router.get('/applications/unrated/:jobId', (req, res, next) => {
  const jobId = Number.parseInt(req.params.jobId);

  knex('applications')
    .where('job_id', jobId)
    .andWhere('overall_score', null)
    .orderBy('created_at')
    .limit(5)
    .then((rows) => {
      const applications = camelizeKeys(rows);

      res.send(applications);
    })
    .catch((err) => {
      next(boom.wrap(err));
    });
});

router.get('/applications/rated/:jobId', (req, res, next) => {
  const jobId = Number.parseInt(req.params.jobId);

  knex('applications')
    .whereNotNull('overall_score')
    .andWhere('job_id', jobId)
    .orderBy('overall_score', 'desc')
    .then((rows) => {
      const applications = camelizeKeys(rows);

      res.send(applications);
    })
    .catch((err) => {
      next(boom.wrap(err));
    })
})

router.get('/applications/:appId', (req, res, next) => {
  const applicationId = Number.parseInt(req.params.appId);

  let result;

  knex('applications')
    .where('id', applicationId)
    .first()
    .then((application) => {
      result = camelizeKeys(application)

      return knex('questions')
        .select('questions.text as question', 'responses.text as response')
        .innerJoin('responses', 'questions.id', 'responses.question_id')
        .where('questions.job_id', application.job_id)
        .where('responses.application_id', application.id);
    })
    .then((rows) => {
      result.responses = camelizeKeys(rows);

      return knex('exps')
        .where('application_id', result.id)
        .orderBy('application_id')
    })
    .then((rows) => {
      result.exps = camelizeKeys(separateDates(rows));

      return knex('edus')
        .where('application_id', result.id)
        .orderBy('application_id')
    })
    .then((rows) => {
      result.edus = camelizeKeys(separateDates(rows));

      res.send(result);
    })
    .catch((err) => {
      next(boom.wrap(err));
    })
});

router.patch('/applications/:appId/edus', (req, res, next) => {
  const appId = Number.parseInt(req.params.appId);
  const { edusRating } = req.body;

  knex('applications')
    .where('id', appId)
    .update({edus_rating: edusRating}, '*')
    .then((rows) => {

      res.send(rows);
    })
    .catch((err) => {
      next(boom.wrap(err));
    });
});

router.patch('/applications/:appId/exps', (req, res, next) => {
  const appId = Number.parseInt(req.params.appId);
  const { expsRating } = req.body;

  knex('applications')
    .where('id', appId)
    .update({exps_rating: expsRating}, '*')
    .then((rows) => {

      res.send(rows);
    })
    .catch((err) => {
      next(boom.wrap(err));
    });
});

router.patch('/applications/:appId/anonymous', (req, res, next) => {
  const appId = Number.parseInt(req.params.appId);
  const { isAnonymous } = req.body;

  knex('applications')
    .where('id', appId)
    .update({anonymous: isAnonymous}, '*')
    .then((rows) => {

      res.send(rows);
    })
    .catch((err) => {
      next(boom.wrap(err));
    });
});

router.patch('/applications/:appId/overallScore', (req, res, next) => {
  const appId = Number.parseInt(req.params.appId);

  let total = 0;

  knex('applications')
    .select('exps_rating')
    .where('id', appId)
    .first()
    .then((row) => {
      total = row.exps_rating;

      return knex('applications')
        .select('edus_rating')
        .where('id', appId)
        .first()
    })
    .then((row) => {
      total += row.edus_rating;

      return knex('responses')
        .sum('rating')
        .where('application_id', appId)
        .first()
    })
    .then((responseTotal) => {
      total += Number.parseInt(responseTotal.sum);

      return knex('responses')
        .count('rating')
        .where('application_id', appId)
        .first()
    })
    .then((numberOfResponses) => {
      const numberOfCriteria = Number.parseInt(numberOfResponses.count) + 2;
      const overallScore = (total / numberOfCriteria).toFixed(1);

      return knex('applications')
        .where('id', appId)
        .update({ overall_score: overallScore }, '*')
    })
    .then((rows) => {

      res.send(rows);
    })
    .catch((err) => {
      next(boom.wrap(err));
    });
});

module.exports = router;
