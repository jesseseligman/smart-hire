module.exports = {
  extends: [
    'ryansobol/browser',
    'ryansobol/es6',
    'ryansobol/react'
  ],

  parserOptions: {
    sourceType: 'module'
  },

  rules: {
    "react/jsx-no-bind": 'off',
    "max-lines": 'off'
  }
};
