'use strict';

/* eslint-disable arrow-body-style */

const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap

const boom = require('boom');
const bcrypt = require('bcrypt-as-promised');
const { camelizeKeys, decamelizeKeys } = require('humps');
const ev = require('express-validation');
const validations = require('../validations/users');
const jwt = require('jsonwebtoken');
const knex = require('../knex');

router.post('/users', ev(validations.post), (req, res, next) => {
  const { email, password } = req.body;

  knex('users')
    .select(knex.raw('1=1'))
    .where('email', email)
    .first()
    .then((exists) => {
      if (exists) {
        throw boom.badRequest('This email is already registered');
      }

      return bcrypt.hash(password, 12);
    })
    .then((hashedPassword) => {
      // eslint-disable-next-line max-len
      const { firstName, lastName, phone, companyName, companyDescription, city, state } = req.body;

      // eslint-disable-next-line max-len
      const user = { firstName, lastName, email, phone, companyDescription, companyName, city, state, hashedPassword };
      const row = decamelizeKeys(user);

      return knex('users').insert(row, '*');
    })
    .then((rows) => {
      const user = camelizeKeys(rows[0]);

      delete user.hashedPassword;

      return user;
    })
    .then((user) => {
      const expiry = new Date(Date.now() + 1000 * 60 * 60 * 3);

      const token = jwt.sign({ userId: user.id }, process.env.SESSION_SECRET,
        { expiresIn: '3h' });

      res.cookie('accessToken', token, {
        httpOnly: true,
        expires: expiry,
        secure: router.get('env') === 'production'
      });

      res.cookie('loggedIn', true, {
        expires: expiry,
        secure: router.get('env') === 'production'
      });

      res.cookie('userId', user.id, {
        expires: expiry,
        secure: router.get('env') === 'production'
      });

      res.send(user);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
