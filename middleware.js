'use strict';

const jwt = require('jsonwebtoken');

const checkAuth = function(req, res, next) {
  jwt.verify(req.cookies.accessToken, process.env.SESSION_SECRET,
    (err, decoded) => {
      if (err) {
        return res.sendStatus(401);
      }

      req.token = decoded;
      next();
    });
};

module.exports = checkAuth;
