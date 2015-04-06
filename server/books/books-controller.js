var react = require('../common/react')
var BooksApi = require('../../client/books/books-api')

exports.index = function (req, res) {
  // TODO: handle error
  BooksApi.fetch(null, null, null, (books) => {
    return react.render(req, res, { books })
  })
}