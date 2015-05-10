var React = require('react')
var Router = require('react-router')

var assets = require('../config/assets')
var clientRoutes = require('../../client/config/routes')

exports.render = function (req, res, props) {
  var router = Router.create({
    location: req.url,
    routes: clientRoutes
  })
  router.run(function (Handler) {
    var html = React.renderToString(<Handler {...props} />)
    return res.render('index', {
      html,
      cssUrl: assets.path('main.css'),
      jsUrl: assets.path('main.js'),
      initialState: JSON.stringify(props)
    })
  })
}
