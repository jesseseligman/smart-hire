'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/smartHire_dev'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/smartHire_test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
