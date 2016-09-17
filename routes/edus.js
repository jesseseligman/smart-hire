'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const ev = require('express-validation');
// const validations = require('../validations/applications');
const { camelizeKeys, decamelizeKeys } = require('humps');
// const { checkAuth } = require('../middleware');
const { separateDates, combineData, alreadyContains } = require('../utils');

const router = express.Router(); // eslint-disable-line new-cap

router.get('/edus', (req, res, next) => {
  const { appIds } = req.body;

  knex('edus')
    .whereIn('application_id', appIds)
    .then((rows) => {
      const edus = camelizeKeys(combineData(separateDates(rows)));

      res.send(edus);
    })
    .catch((err) => {
      next(boom.wrap(err));
    });
});

module.exports = router;
