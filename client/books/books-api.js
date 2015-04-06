var parseLinkHeader = require('parse-link-header')
var axios = require('axios')

var api = require('../common/api')
var BooksActions = require('./books-actions')

// TODO: should be able to fetch a specified page
function request(url, filter) {
  if (!url)
    url = api.getHostBaseUrl() + '/books'

  if (filter && filter.id)
    url += '/' + filter.id

  return axios.get(url, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

// TODO: hashify input
// TODO: convert success and error separate actions to a single action, node-style params
exports.fetch = async function (url, filter, page, done) {
  if (!done)
    done = BooksActions.fetchSuccess

  try {
    var res = await request(url, filter)
    if (res.data.errors)
      return done(res.data.errors)

    var linkHeader
    if (res.headers && res.headers.link)
      linkHeader = parseLinkHeader(res.headers.link)

    // TODO: handle null first
    done(res.data.books, filter, page, linkHeader)
  } catch (e) {
    done(e)
  }
}