var s3 = require('./s3')
var webpack = require('./webpack')

var assetHost = process.env.ASSET_HOST || 'http://localhost:4200'
var _entryFileName = ''

exports.getEntryScriptUrl = () => {
  return `${assetHost}/${_entryFileName}`
}

exports.upload = (done) => {
  webpack.compile((compileErr, asset) => {
    if (compileErr) {
      console.log(compileErr)
      throw new Error('Compile error', compileErr)
    }

    _entryFileName = asset.key
    s3.upload(asset.key, asset.path, (uploadErr, data) => {
      if (uploadErr) {
        console.log(uploadErr)
        throw new Error('Asset upload error', uploadErr)
      }

      done(null, data)
    })
  })
}