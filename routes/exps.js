'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const ev = require('express-validation');
// const validations = require('../validations/applications');
const { camelizeKeys, decamelizeKeys } = require('humps');
// const { checkAuth } = require('../middleware');
const { separateDates, combineExps, alreadyContains } = require('../utils');

const router = express.Router(); // eslint-disable-line new-cap

router.get('/exps', (req, res, next) => {
  const { appIds } = req.body;

  knex('exps')
    .whereIn('application_id', appIds)
    .orderBy('application_id')
    .then((rows) => {
      const exps = camelizeKeys(combineExps(separateDates(rows)));

      res.send(exps);
    })
    .catch((err) => {
      next(boom.wrap(err));
    });
});

module.exports = router;
