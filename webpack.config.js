var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')
var webpack = require('webpack')
var ManifestPlugin = require('webpack-manifest-plugin')

var isProd = process.env.NODE_ENV === 'production'
var jsFilename = isProd ? '[name].[hash].js' : '[name].js'
var cssFilename = isProd ? '[name].[hash].css' : '[name].css'
var plugins = [
  new ExtractTextPlugin(null, cssFilename),
  new webpack.optimize.OccurenceOrderPlugin(true),
  new ManifestPlugin()
]

if (isProd) {
  plugins = plugins.concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
}

module.exports = {
  entry: {
    main: [
      'babel/polyfill',
      './client/index.js'
    ]
  },
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: jsFilename,
    chunkFilename: 'chunk.[hash].[id].js'
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
  },
  plugins: plugins
}
