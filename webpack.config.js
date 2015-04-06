
var OccurenceOrderPlugin = webpack.optimize.OccurenceOrderPlugin
var DefinePlugin = require('webpack').DefinePlugin
var HtmlWebpackPlugin = require('html-webpack-plugin')

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
      {test: /\.scss/, loader:'style-loader!css-loader!autoprefixer-loader?browsers=last 2 version!sass-loader'},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    ]
  },
  plugins: [
    new OccurenceOrderPlugin(true),
    new DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new HtmlWebpackPlugin({
      title: 'Jake\'s Books',
      template: 'node_modules/html-webpack-template/index.html',
      mobile: true,
      googleAnalytics: {
        trackingId: 'UA-16224416-4',
        pageViewOnLoad: true
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.json']
  }
}
