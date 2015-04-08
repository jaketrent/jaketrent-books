var assign = require('lodash-node/modern/objects/assign')
var path = require('path')

module.exports = assign({}, require('./webpack.config.js'), {
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].[hash].js',
    chunkFilename: 'chunk.[hash].[id].js'
  }
})