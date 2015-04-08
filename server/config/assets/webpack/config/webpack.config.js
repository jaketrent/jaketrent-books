var path = require('path')

var webpack = require('webpack')
var OccurenceOrderPlugin = webpack.optimize.OccurenceOrderPlugin

module.exports = {
  entry: {
    main: [
      '6to5/polyfill',
      '6to5/runtime',
      './client/index.js'
    ]
  },
  output: {
    path: './dist',
    filename: '[name].[hash].js',
    chunkFilename: 'chunk.[hash].[id].js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'jsx-loader?harmony!6to5-loader?experimental&runtime', exclude: /node_modules/ },
      {test: /\.json$/, loader: 'json-loader' },
      {test: /\.scss/, loader:'style-loader!css-loader!autoprefixer-loader?browsers=last 2 version!sass-loader'},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    ]
  },
  plugins: [
    new OccurenceOrderPlugin(true)
  ],
  resolve: {
    extensions: ['', '.js', '.json']
  }
}
