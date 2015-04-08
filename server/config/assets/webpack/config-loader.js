exports.load = function () {
  var env = process.env.NODE_ENV || 'development'
  return require(`./config/${env}.config.js`)
}