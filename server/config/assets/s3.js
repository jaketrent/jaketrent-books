var AWS = require('aws-sdk')
var fs = require('fs')
var mime = require('mime')

var BUCKET_NAME = 'jaketrent-books'

var s3  = new AWS.S3()

function getStream(path) {
  return fs.createReadStream(path)
}

// TODO: DRY up
function anArray(data) {
  if (Array.isArray(data)) return data
  if (data) return [ data ]
  return []
}

exports.isFileExists = (fileName, done) => {
  var params = {
    Bucket: BUCKET_NAME,
    Key: fileName
  };
  s3.headObject(params, (err) => {
    if (err) return done(err)

    done(null, true)
  });
}

exports.upload = (fileName, path, done) => {
  console.log(`Uploading asset ${path} ...`)
  var params = {
    Bucket: BUCKET_NAME,
    Key: fileName,
    ACL: 'public-read',
    Body: getStream(path),
    ContentType: mime.lookup(fileName)
  }
  s3.upload(params, done)
}

exports.uploadIfNew = (assets, done) => {
  assets = anArray(assets)

  var assetsLeft = assets.length

  function doneMaybe(err, data) {
    assetsLeft--
    if (assetsLeft <= 0)
      return done(err, data)
  }

  assets.forEach((asset) => {
    exports.isFileExists(asset.fileName, (accessErr, exists) => {
      // skip accessErr check -- if err, then 404 (doesn't exist)

      if (!!exists) {
        console.log(`Asset already exists on s3 ${asset.path} -- Skipping.`)
        doneMaybe()
      } else {
        exports.upload(asset.fileName, asset.path, doneMaybe)
      }
    })
  })
}
