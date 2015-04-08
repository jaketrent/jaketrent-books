'use strict'

var assign = require('react/lib/Object.assign')
var EventEmitter = require('events').EventEmitter
var find = require('lodash-node/modern/collections/find')
var findIndex = require('lodash-node/modern/arrays/findIndex')
var uniq = require('lodash-node/modern/arrays/uniq')

var AppConstants = require('../common/app-constants')
var AppDispatcher = require('../common/app-dispatcher')
var BooksApi = require('./books-api')
var BooksConstants = require('./books-constants')

var ActionTypes = BooksConstants.ActionTypes

var _books = []
var _latestLinkHeader

function cache(books, page) {
  if (!books) return

  if (!Array.isArray(books))
    books = [ books ]

  if (!page)
    page = 1

  _books = uniq(_books.concat(books.map(function (book) {
    return {
      book: book,
      page: page
    }
  })))
}

function uncache(book) {
  var indx = findIndex(_books, function (b) {
    return b.book.id == book.id
  })
  _books.splice(indx, 1)
}

// TODO: use just pages or just urls
function getUrl() {
  if (_latestLinkHeader && _latestLinkHeader.next)
    return _latestLinkHeader.next.url
}

function getPage() {
  if (_latestLinkHeader && _latestLinkHeader.next)
    return _latestLinkHeader.next.page
  else
    return 1
}

function getLastPage() {
  if (_latestLinkHeader && _latestLinkHeader.last)
    return _latestLinkHeader.last.page
}

var BooksStore = assign({}, EventEmitter.prototype, {

  init(books) {
    cache(books)
  },

  find: function (filter) {
    var records = _books

    if (filter) {

      if (filter.id) {
        var foundRecord = find(records, function (record) {
          // props.params is a string, api is a number
          return record.book.id == filter.id
        })

        if (foundRecord)
          return foundRecord.book
        else
          return
      }

      return records
        .filter(function (record) {
          return Object.keys(filter).every(function (key) {
            return record.book[key] && record.book[key] == filter[key]
          })
        })
        .map(function (record) {
          return record.book
        })
    } else {
      return records.map(function (record) {
        return record.book
      })
    }
  },

  hasNextPage: function () {
    var hasNoHeaderMeaningNoInitialRequest = !_latestLinkHeader
    var hasHeaderThatIndicatesNextPageAboveOne = !!_latestLinkHeader
      && !!_latestLinkHeader.next
      && _latestLinkHeader.next.page > 1
    return hasNoHeaderMeaningNoInitialRequest ||
      hasHeaderThatIndicatesNextPageAboveOne
  },

  emitChange: function () {
    this.emit(AppConstants.Events.CHANGE, arguments)
  },

  addChangeListener: function (callback) {
    this.on(AppConstants.Events.CHANGE, callback)
  },

  removeChangeListener: function (callback) {
    this.removeListener(AppConstants.Events.CHANGE, callback)
  }
})

BooksStore.dispatchToken = AppDispatcher.register(function (payload) {
  var action = payload.action

  switch(action.type) {

    case ActionTypes.FETCH:
      if (BooksStore.hasNextPage())
        BooksApi.fetch(getUrl(), action.filter, getPage())
      break

    case ActionTypes.FETCH_SUCCESS:
      _latestLinkHeader = action.linkHeader
      cache(action.models, action.page)

      if (!_latestLinkHeader && action.filter)
        BooksApi.fetch(getUrl(), null, getPage())

      BooksStore.emitChange()
      break

    case ActionTypes.TRANSITION:
      BooksStore.emitChange()
      break
  }
})

module.exports = BooksStore