var webpack = require('webpack')

var webpackConfig = require('../webpack.config')

var compiler = webpack(webpackConfig)

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

    done(null, jsonStats)
  })
}

exports.compile = compile
