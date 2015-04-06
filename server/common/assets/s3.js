var AWS = require('aws-sdk')
var fs = require('fs')

var BUCKET_NAME = 'jaketrent-books'

var s3  = new AWS.S3()

function getStream(path) {
  return fs.createReadStream(path)
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