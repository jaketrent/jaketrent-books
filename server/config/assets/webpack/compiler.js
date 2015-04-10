var path = require('path')
var webpack = require('webpack')

var config = require('./config-loader').load()

var DEFAULT_EXT = 'js'
var OUTPUT_NAME = 'main'

var compiler = webpack(config)

function fmtFileName(stats, ext) {
  return `${OUTPUT_NAME}.${stats.hash}.${ext}`
}

function fmtPath(filename) {
  var outputPath = path.resolve(config.output.path)
  return path.join(outputPath, `${filename}`)
}

function fmtAsset(stats, ext) {
  if (!ext)
    ext = DEFAULT_EXT

  var key = fmtFileName(stats, ext);
  var path = fmtPath(key)
  return { key, path }
}

function compile(done) {
  console.log('Compiling assets...')
  compiler.run((err, stats) => {
    if (err)
      return done(err)

    var jsonStats = stats.toJson({
      hash: true
    })
    if(jsonStats.errors.length > 0)
      return done(jsonStats.errors)

    if(jsonStats.warnings.length > 0)
      return done(jsonStats.warnings)

    done(null, {
      css: fmtAsset(jsonStats, 'css'),
      js: fmtAsset(jsonStats, 'js')
    })
  })
}

exports.compile = compile