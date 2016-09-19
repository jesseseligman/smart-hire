'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const ev = require('express-validation');
// const validations = require('../validations/applications');
const { camelizeKeys, decamelizeKeys } = require('humps');
// const { checkAuth } = require('../middleware');

const router = express.Router(); // eslint-disable-line new-cap

router.get('/questions/:questionId/:appId', (req, res, next) => {
  const questionId = Number.parseInt(req.params.questionId);
  const appId = Number.parseInt(req.params.appId);

  let result = {};

  knex('questions')
    .where('id', questionId)
    .first()
    .then((question) => {
      result.question = question.text;

      return knex('responses')
        .select('text as response', 'application_id')
        .where('application_id', appId)
        .andWhere('question_id', questionId)
    })
    .then((rows) => {
      result.responses = camelizeKeys(rows);

      res.send(result);
    })
    .catch((err) => {
      next(boom.wrap(err));
    });
});

module.exports = router;
