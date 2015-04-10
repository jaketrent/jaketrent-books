var s3 = require('./s3')
var webpack = require('./webpack')

var port = process.env.PORT || 3000 // TODO: move to config
var assetHost = process.env.ASSET_HOST || `http://localhost:${port}/assets`

// TODO: extract/encapsulate this
var _entryFileName = `main.${(process.env.NODE_ENV || 'development')}.js`
var _cssFileName = `main.${(process.env.NODE_ENV || 'development')}.css`

function deploy(done) {
  webpack.compile((compileErr, assets) => {
    if (compileErr) {
      console.log(compileErr)
      throw new Error('Compile error', compileErr)
    }

    _entryFileName = assets.js.key
    _cssFileName = assets.css.key

    if (!process.env.UPLOAD_ASSETS)
      return done()

    s3.uploadIfNew([ assets.js, assets.css ], (uploadErr) => {
      if (uploadErr) {
        console.log(uploadErr)
        throw new Error('Asset upload error', uploadErr)
      }

      done()
    })
  })
}

exports.getCssUrl = () => {
  return `${assetHost}/${_cssFileName}`
}

exports.getEntryScriptUrl = () => {
  return `${assetHost}/${_entryFileName}`
}

exports.init = (app, done) => {
  if (process.env.NODE_ENV === 'production') {
    deploy(done)
  } else {
    app.use('/assets', webpack.middleware)
    done()
  }
}

