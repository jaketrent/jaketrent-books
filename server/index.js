require('babel/register')({
  stage: 0
})
require('dotenv').load()

var express = require('express')
var path = require('path')
var React = require('react')
var Router = require('react-router')

var assets = require('./common/assets')
var routes = require('./config/routes')
var port = process.env.PORT || 3000

var app = express()

app.set('views', path.resolve(__dirname + '/views'))
app.set('view engine', 'html')
app.engine('html', require('ejs').renderFile)

routes.map(app);

assets.upload(function () {
  app.listen(port, function () {
    console.log('Server listening on ' + port + '...')
  })
})
