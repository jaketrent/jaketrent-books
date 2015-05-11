var path = require('path')

var s3 = require('./s3')

function fmtManifestForUpload(manifest, assetDir) {
  return Object.keys(manifest).map((assetKey) => {
    return {
      fileName: manifest[assetKey],
      path: path.join(assetDir, manifest[assetKey])
    }
  })
}

function upload(manifest, assetDir, done) {
  var assets = fmtManifestForUpload(manifest, assetDir)
  console.log('Uploading all assets in manifest...')
  s3.uploadIfNew(assets, (uploadErr) => {
    if (uploadErr) {
      console.log(uploadErr)
      throw new Error('Asset upload error', uploadErr)
    }

    done()
  })
}

module.exports = upload
