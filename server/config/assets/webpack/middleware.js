var webpack = require('webpack')
var webpackMiddleware = require("webpack-dev-middleware");

var configLoader = require('./config-loader')

module.exports = webpackMiddleware(webpack(configLoader.load()))
