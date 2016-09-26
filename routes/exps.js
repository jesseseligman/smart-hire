'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys } = require('humps');
const { separateDates, combineExps } = require('../utils');

// const ev = require('express-validation');
// const validations = require('../validations/applications');
// const { checkAuth } = require('../middleware');

const router = express.Router(); // eslint-disable-line new-cap

router.get('/exps/:appId', (req, res, next) => {
  const appId = Number.parseInt(req.params.appId);

  knex('exps')
    .where('application_id', appId)
    .orderBy('application_id')
    .then((rows) => {
      const exp = camelizeKeys(combineExps(separateDates(rows))[0]);

      res.send(exp);
    })
    .catch((err) => {
      next(boom.wrap(err));
    });
});

module.exports = router;
