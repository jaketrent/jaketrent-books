var assign = require('lodash-node/modern/objects/assign')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpack = require('webpack')

var OccurenceOrderPlugin = webpack.optimize.OccurenceOrderPlugin

module.exports = assign({}, require('./webpack.config.js'), {
  output: {
    path: '/',
    filename: '[name].development.js',
    publicPath: '/assets/'
  },
  plugins: [
    new ExtractTextPlugin('[name].development.css'),
    new OccurenceOrderPlugin(true)
  ]
})
