var AWS = require('aws-sdk')
var fs = require('fs')

var BUCKET_NAME = 'jaketrent-books'

var s3  = new AWS.S3()

function getStream(path) {
  return fs.createReadStream(path)
}

exports.isFileExists = (key, done) => {
  var params = {
    Bucket: BUCKET_NAME,
    Key: key
  };
  s3.headObject(params, (err) => {
    if (err) return done(err)

    done(null, true)
  });
}

exports.upload = (key, path, done) => {
  console.log(`Uploading asset ${path} ...`)
  var params = {
    Bucket: BUCKET_NAME,
    Key: key,
    ACL: 'public-read',
    Body: getStream(path)
  }
  s3.upload(params, done)
}

exports.uploadIfNew = (key, path, done) => {
  exports.isFileExists(key, (accessErr, exists) => {
    // skip accessErr check -- if err, then 404 (doesn't exist)

    if (!!exists) {
      console.log(`Asset already exists on s3 ${path} .  Skipping.`)
      done()
    } else {
      exports.upload(key, path, done)
    }
  })
}