var path = require('path')
var webpack = require('webpack')

var config = require('./config-loader').load()

var OUTPUT_NAME = 'main'

var compiler = webpack(config)

function fmtFileName(stats) {
  return `${OUTPUT_NAME}.${stats.hash}.js`
}

function fmtPath(stats) {
  var outputPath = path.resolve(config.output.path)
  return path.join(outputPath, `${fmtFileName(stats)}`)
}

exports.compile = (done) => {
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
      key: fmtFileName(jsonStats),
      path: fmtPath(jsonStats)
    })
  })
}