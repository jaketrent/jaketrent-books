var books = require('../books/books-controller')

exports.map = function (app) {
  app.get('/', books.index)
}