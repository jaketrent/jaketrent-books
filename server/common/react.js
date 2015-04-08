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
    var Handler = React.createElement(Handler, props)
    var html = React.renderToString(Handler)
    return res.render('react-page', {
      html,
      entryScriptUrl: assets.getEntryScriptUrl(),
      initialState: JSON.stringify(props)
    })
  })
}
