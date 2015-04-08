var assign = require('lodash-node/modern/objects/assign')

module.exports = assign({}, require('./webpack.config.js'), {
  output: {
    path: '/',
    filename: '[name].development.js'
  }
})