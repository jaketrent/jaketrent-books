var clone = require('lodash/lang/clone')
var fs = require('fs');
var path = require('path');
var webpackConfig = require('../../../webpack.config')

var _assetsManifest

loadSync()

function mapAt(key) {
  return clone(_assetsManifest[key])
}

function getMap() {
  return clone(_assetsManifest)
}

function loadSync() {
  var manifestPath = 'dist/manifest.json' // TODO: put in config
  try {
    _assetsManifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
  } catch (e) {
    console.log(`Error opening ${manifestPath}`, e)
  }
  return getMap()
}

exports.at = mapAt
exports.get = getMap
exports.loadSync = loadSync
