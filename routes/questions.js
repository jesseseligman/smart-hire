'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys } = require('humps');

// const ev = require('express-validation');
// const validations = require('../validations/applications');
// const { checkAuth } = require('../middleware');

const router = express.Router(); // eslint-disable-line new-cap

router.get('/questions/:jobId/:appId', (req, res, next) => {
  const jobId = Number.parseInt(req.params.jobId);
  const appId = Number.parseInt(req.params.appId);

  knex('questions')

    // eslint-disable-next-line max-len
    .select('questions.text as question', 'responses.id as response_id', 'responses.text as response', 'responses.rating', 'questions.id as question_id', 'application_id')
    .innerJoin('responses', 'questions.id', 'responses.question_id')
    .where('questions.job_id', jobId)
    .where('responses.application_id', appId)
    .orderBy('application_id')
    .then((rows) => {
      res.send(camelizeKeys(rows));
    })
    .catch((err) => {
      next(boom.wrap(err));
    });
});

module.exports = router;
