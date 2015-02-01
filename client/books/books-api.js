'use strict'

var parseLinkHeader = require('parse-link-header')
var axios = require('axios')

var api = require('../common/api')
var BooksActions = require('./books-actions')

exports.fetch = async function (url, filter, page) {
  if (!url)
    url = api.getHostBaseUrl() + '/books'

  if (filter && filter.id)
    url += '/' + filter.id

  try {
    var res = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

    if (res.data.errors)
      return BooksActions.fetchError(res.data.errors)

    var linkHeader
    if (res.headers && res.headers.link)
      linkHeader = parseLinkHeader(res.headers.link)

    setTimeout(() =>
      BooksActions.fetchSuccess(res.data.books, filter, page, linkHeader)
    , 1200)
  } catch (err) {
    BooksActions.fetchError(err)
  }
}
