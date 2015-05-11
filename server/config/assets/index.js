var manifest = require('./manifest')
var webpack = require('./webpack')

var port = process.env.PORT || 3000 // TODO: move to config
var assetHost = process.env.ASSET_HOST || `http://localhost:${port}/assets`
var isProd = process.env.NODE_ENV === 'production'

function assetPath(assetKey) {
  var fileName = isProd ? manifest[assetKey] : assetKey
  return assetHost + '/' + fileName
}

function init(app) {
  if (process.env.NODE_ENV === 'development') {
    app.use('/assets', webpack.middleware)
  }
}

exports.init = init
exports.path = assetPath
