require('babel/register')({
  stage: 0
})
require('dotenv').load()
var express = require('express')

var assets = require('./common/assets')
var routes = require('./config/routes')
var views = require('./config/views')

var port = process.env.PORT || 3000
var app = express()

views.init(app)
routes.map(app)

assets.upload(function () {
  app.listen(port, function () {
    console.log('Server listening on ' + port + '...')
  })
})
