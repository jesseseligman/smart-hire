'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const ev = require('express-validation');
// const validations = require('../validations/applications');
const { camelizeKeys, decamelizeKeys } = require('humps');
// const { checkAuth } = require('../middleware');

const router = express.Router(); // eslint-disable-line new-cap
router.get('/applications/unrated/:jobId', (req, res, next) => {
  const jobId = Number.parseInt(req.params.jobId);

  knex('applications')
    .where('job_id', jobId)
    .andWhere('overall_score', null)
    .orderBy('created_at')
    .limit(5)
    .then((applications) => {
      res.send(applications);
    })
    .catch((err) => {
      next(boom.wrap(err));
    });
});

module.exports = router;
