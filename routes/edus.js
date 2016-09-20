'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const ev = require('express-validation');
// const validations = require('../validations/applications');
const { camelizeKeys, decamelizeKeys } = require('humps');
// const { checkAuth } = require('../middleware');
const { separateDates, combineEdus, alreadyContains } = require('../utils');

const router = express.Router(); // eslint-disable-line new-cap

router.get('/edus/:appId', (req, res, next) => {
  const appId = Number.parseInt(req.params.appId);

  knex('edus')
    .where('application_id', appId)
    .orderBy('application_id')
    .then((rows) => {
      const edu = camelizeKeys(combineEdus(separateDates(rows))[0]);

      res.send(edu);
    })
    .catch((err) => {
      next(boom.wrap(err));
    });
});

module.exports = router;
