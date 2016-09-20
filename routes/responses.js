'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const ev = require('express-validation');
// const validations = require('../validations/applications');
const { camelizeKeys, decamelizeKeys } = require('humps');
// const { checkAuth } = require('../middleware');

const router = express.Router(); // eslint-disable-line new-cap

router.patch('/responses/:responseId', (req, res, next) => {
  const responseId = Number.parseInt(req.params.responseId);
  const { responseRating } = req.body;

  knex('responses')
    .where('id', responseId)
    .update({ rating: responseRating }, '*')
    .then((rows) => {

      res.send(rows)
    })
    .catch((err) => {

      next(boom.wrap(err));
    });
});


module.exports = router;
