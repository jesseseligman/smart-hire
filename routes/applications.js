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

router.get('/applications/:appId', (req, res, next) => {
  const applicationId = Number.parseInt(req.params.appId);

  let result;

  knex('applications')
    .where('id', applicationId)
    .first()
    .then((application) => {
      result = camelizeKeys(application)

      return knex('questions')
        .select('id', 'questions.text as question')
        .where('job_id', application.job_id)
    })
    .then((rows) => {
      result.questions = camelizeKeys(rows);

      return knex('responses')
        .select('text as response', 'question_id', 'rating')
        .where('application_id', result.id)
    })
    .then((rows) => {
      result.responses = camelizeKeys(rows);

      return knex('exps')
        .where('application_id', result.id)
    })
    .then((rows) => {
      result.exps = camelizeKeys(separateDates(rows));

      return knex('edus')
        .where('application_id', result.id)
    })
    .then((rows) => {
      result.edus = camelizeKeys(separateDates(rows));

      res.send(result);
    })
    .catch((err) => {
      next(boom.wrap(err));
    })
});

module.exports = router;
