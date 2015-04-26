var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')

module.exports = {
  entry: {
    main: [
      'babel/polyfill',
      './client/index.js'
    ]
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader?harmony!babel-loader?stage=0', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.scss/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?browsers=last 2 version!sass-loader') },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=20000' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
}
