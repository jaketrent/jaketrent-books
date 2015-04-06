var path = require('path')

exports.init = (app) => {
  app.set('views', path.resolve(path.join(__dirname, '..', 'views')))
  app.set('view engine', 'html')
  app.engine('html', require('ejs').renderFile)
}