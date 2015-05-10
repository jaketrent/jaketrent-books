var webpack = require('webpack')
var webpackConfig = require('../../../webpack.config.js')
var webpackMiddleware = require("webpack-dev-middleware");

exports.middleware = webpackMiddleware(webpack(webpackConfig))
