'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const checkAuth = require('../middleware');
const ev = require('express-validation');
const validations = require('../validations/responses');

const router = express.Router(); // eslint-disable-line new-cap

router.patch('/responses/:responseId', checkAuth, ev(validations.patch), (req, res, next) => {
  const responseId = Number.parseInt(req.params.responseId);
  const { responseRating } = req.body;

  knex('responses')
    .where('id', responseId)
    .update({ rating: responseRating }, '*')
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      next(boom.wrap(err));
    });
});

module.exports = router;
