require('babel/register')({
  stage: 0
})
require('dotenv').load()

var express = require('express')
var path = require('path')

var assets = require('./config/assets')
var routes = require('./config/routes')
var views = require('./config/views')

var port = process.env.PORT || 3000
var app = express()

views.init(app)
routes.map(app)

assets.init(app, function () {
  app.listen(port, function () {
    console.log('Server listening on ' + port + '...')
  })
})
