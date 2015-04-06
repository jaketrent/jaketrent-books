require('babel/register')({
  stage: 0
})

var express = require('express')
var path = require('path')
var React = require('react')
var Router = require('react-router')

var routes = require('./config/routes');

var app = express()

app.set('views', path.resolve(__dirname + '/views'))
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

routes.map(app);

var port = process.env.PORT || 3000
app.listen(port, function () {
  console.log('Server listening on ' + port + '...')
})