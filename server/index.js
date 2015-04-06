require('babel/register')({
  stage: 0
})
require('dotenv').load()
var express = require('express')
var path = require('path')

var assets = require('./common/assets')
var routes = require('./config/routes')
var views = require('./config/views')

var port = process.env.PORT || 3000
var app = express()

app.use('/assets', express.static('dist'))
views.init(app)
routes.map(app)

assets.init(function () {
  app.listen(port, function () {
    console.log('Server listening on ' + port + '...')
  })
})
