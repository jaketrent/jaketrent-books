var s3 = require('./s3')
var webpack = require('./webpack')

var assetHost = process.env.ASSET_HOST || 'http://localhost:3000/assets'
var _entryFileName = ''

exports.getEntryScriptUrl = () => {
  return `${assetHost}/${_entryFileName}`
}

exports.init = (done) => {
  // TODO: if not uploading, use local webpack-dev-server
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