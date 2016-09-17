'use strict';
// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config();
// }

const express = require('express');
const port = process.env.PORT || 8000;
const path = require('path');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const app = express();

app.disable('x-powered-by');

switch (app.get('env')) {
  case 'development':
    app.use(morgan('dev'));
    break;

  case 'production':
    app.use(morgan('short'));
    break;

  default:
}

app.use(bodyParser.json());
app.use(cookieParser());

// Expose public directory to client
app.use(express.static(path.join(__dirname, 'public')));

// CSRF protection
// app.use('/api', (req, res, next) => {
//   if (/json/.test(req.get('Accept'))) {
//     return next();
//   }
//
//   res.sendStatus(406);
// });

// REQUIRE IN ROUTERS
const users = require('./routes/users');
const applications = require('./routes/applications');
const edus = require('./routes/edus');

// ROUTE HANDLERS
// app.use('/api', jobs);
app.use('/api', users);
app.use('/api', applications);
app.use('/api', edus);
// app.use(users);

app.use('/api', (_req, res) => {
  res.sendStatus(404);
});


app.use((_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// eslint-disable-next-line max-params
app.use((err, _req, res, _next) => {
  if (err.status || err.output && err.output.statusCode) {
    return res.status(err.status || err.output.statusCode).send(err);
  }

  console.error(err.stack); // eslint-disable-line no-console
  res.sendStatus(500);
});

app.listen(port, () => {
  console.log('Listening on port,', port); // eslint-disable-line no-console
});

module.exports = app;
