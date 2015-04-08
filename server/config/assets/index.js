var s3 = require('./s3')
var webpack = require('./webpack')

var assetHost = process.env.ASSET_HOST || 'http://localhost:3000/assets'
var _entryFileName = `main.${(process.env.NODE_ENV || 'development')}.js`

function deploy(done) {
  webpack.compile((compileErr, asset) => {
    if (compileErr) {
      console.log(compileErr)
      throw new Error('Compile error', compileErr)
    }

    _entryFileName = asset.key

    if (!process.env.UPLOAD_ASSETS)
      return done()

    s3.uploadIfNew(asset.key, asset.path, (uploadErr) => {
      if (uploadErr) {
        console.log(uploadErr)
        throw new Error('Asset upload error', uploadErr)
      }

      done()
    })
  })
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

