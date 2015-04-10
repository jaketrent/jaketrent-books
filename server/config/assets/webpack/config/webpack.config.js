var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')

module.exports = {
  entry: {
    main: [
      '6to5/polyfill',
      '6to5/runtime',
      './client/index.js'
    ]
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader?harmony!6to5-loader?experimental&runtime', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.scss/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?browsers=last 2 version!sass-loader') },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
}
