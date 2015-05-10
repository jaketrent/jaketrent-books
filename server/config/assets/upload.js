var manifest = require('./manifest')
var s3 = require('./s3')

function fmtManifestForUpload() {
  return Object.keys(manifest).map((assetKey) => {
    return {
      fileName: manifest[assetKey],
      path: path.join(webpackConfig.assets.publicDir, manifest[assetKey])
    }
  })
}

function upload(done) {
  var assets = fmtManifestForUpload()
  s3.uploadIfNew(assets, (uploadErr) => {
    if (uploadErr) {
      console.log(uploadErr)
      throw new Error('Asset upload error', uploadErr)
    }

    done()
  })
}

module.exports = upload
