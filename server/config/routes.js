var books = require('../books/books-controller')

exports.map = function (app) {
  app.get('*', function (req, res) {
    res.status(301).redirect('https://jaketrent.com/book/')
  })
  // app.get('/', books.index)
  // app.get('/books/:id', books.detail)
}
