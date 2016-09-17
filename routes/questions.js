'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const ev = require('express-validation');
// const validations = require('../validations/applications');
const { camelizeKeys, decamelizeKeys } = require('humps');
// const { checkAuth } = require('../middleware');

const router = express.Router(); // eslint-disable-line new-cap

router.get('/questions/:questionId', (req, res, next) => {
  const questionId = Number.parseInt(req.params.questionId);
  const { appIds } = req.body;

  let result = {};

  knex('questions')
    .where('id', questionId)
    .first()
    .then((question) => {
      result.question = question.text;

      return knex('responses')
        .select('text as response', 'application_id')
        .whereIn('application_id', appIds)
        .andWhere('question_id', questionId)
        .orderBy('application_id')
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
