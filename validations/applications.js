'use strict';

const Joi = require('joi');

module.exports.patch = {
  body: {
    expsRating: Joi.number()
      .min(0)
      .max(5),
    edusRating: Joi.number()
      .min(0)
      .max(5)
  }
};
