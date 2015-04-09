var react = require('../common/react')
var BooksApi = require('../../client/books/books-api')

exports.index = function (req, res) {
  BooksApi.fetch(null, null, null, (books) => {
    return react.render(req, res, { books })
  })
}

exports.detail = function (req, res) {
  BooksApi.fetch(null, { id: req.params.id }, null, (books) => {
    return react.render(req, res, { books })
  })
}