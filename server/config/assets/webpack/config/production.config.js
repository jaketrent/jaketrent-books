var assign = require('lodash-node/modern/objects/assign')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')
var webpack = require('webpack')

module.exports = assign({}, require('./webpack.config.js'), {
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].[hash].js',
    chunkFilename: 'chunk.[hash].[id].js'
  },
  //  TODO: make more DRY - just filename, not all of plugin def
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('[name].[hash].css')
  ]
})
