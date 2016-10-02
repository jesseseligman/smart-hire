'use strict';

const Joi = require('joi');

module.exports.patch = {
  body: {
    responseRating: Joi.number()
      .min(1)
      .max(5)
  }
};
