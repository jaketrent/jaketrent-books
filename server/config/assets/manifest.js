var fs = require('fs');
var path = require('path');
var webpackConfig = require('../../../webpack.config')

var _assetsManifest

loadManifest()

function loadManifest() {
  var manifestPath = 'dist/manifest.json' // TODO: put in config
  _assetsManifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
  // TODO: handle dev mode with in-memory stuff
  return _assetsManifest
}

module.exports = _assetsManifest
