require('babel/register')({ stage: 0 })
require('dotenv').load()

var manifest = require('../server/config/assets/manifest')
var upload = require('./upload')
var webpack = require('./webpack')

var WEBPACK_OUT_DIR = './dist'

webpack.compile(function (err, webpackStats) {
  if (err) {
    console.log('Error compiling assets', err)
    throw err
  }

  upload(manifest, WEBPACK_OUT_DIR, function () {
    console.log('Asset upload complete.')
  })
})
