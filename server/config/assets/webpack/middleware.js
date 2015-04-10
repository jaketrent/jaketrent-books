var webpack = require('webpack')
var webpackMiddleware = require("webpack-dev-middleware");

var configLoader = require('./config-loader')

// TODO: require this dynamically, and adjust to devDep
module.exports = webpackMiddleware(webpack(configLoader.load()))
