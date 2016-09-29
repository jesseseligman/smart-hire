'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys } = require('humps');
const { getUnrated } = require('../utils');
const checkAuth = require('../middleware');

const router = express.Router(); // eslint-disable-line new-cap

// eslint-disable-next-line max-len
router.get('/jobs/:userId', checkAuth, (req, res, next) => {
  const userId = Number.parseInt(req.params.userId);
  let jobs;

  knex('jobs')
    .where('user_id', userId)
    .orderBy('created_at')
    .then((rows) => {
      jobs = camelizeKeys(rows);

      return knex('jobs')
        .select('overall_score', 'job_id')
        .innerJoin('applications', 'jobs.id', 'applications.job_id');
    })
    .then((applications) => {
      getUnrated(jobs, applications);
      res.send(jobs);
    })
    .catch((err) => {
      next(boom.wrap(err));
    });
});

module.exports = router;
