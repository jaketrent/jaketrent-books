'use strict'

var parseLinkHeader = require('parse-link-header')
var request = require('superagent')

var api = require('../common/api')
var BooksActions = require('./books-actions')

function requestBooks(url, filter, done) {
  if (!url)
    url = api.getHostBaseUrl() + '/books'

  if (filter && filter.id)
    url += '/' + filter.id

  request
    .get(url)
    .set('Content-Type', 'application/json')
    .withCredentials()
    .end(function (err, res) {
      if (err || res.body.errors) return done(err || res.body.errors)

      done(null, res)
    })
}

exports.fetch = function (url, filter, page) {
  function requestBooksCallback(err, res) {
    if (err) return BooksActions.fetchError(err || res.body.errors)

    var linkHeader

    if (res.headers && res.headers.link)
      linkHeader = parseLinkHeader(res.headers.link)

    BooksActions.fetchSuccess(res.body.books, filter, page, linkHeader)
  }

  requestBooks(url, filter, requestBooksCallback)
}
