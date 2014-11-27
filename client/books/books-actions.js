'use strict'

var BooksApi = require('./books-api')
var BooksConstants = require('./books-constants')
var BooksStore = require('./books-store')
var AppDispatcher = require('../common/app-dispatcher')

var ActionTypes = BooksConstants.ActionTypes

function ensureFindable(filter) {
  var foundBook = BooksStore.find(filter)
  if (!foundBook)
    BooksApi.fetch(null, filter)
}

exports.fetch = function (filter) {
  AppDispatcher.handleViewAction({
    type: ActionTypes.FETCH,
    filter: filter
  })
}

exports.fetchSuccess = function (models, filter, page, linkHeader) {
  AppDispatcher.handleServerAction({
    type: ActionTypes.FETCH_SUCCESS,
    models: models,
    filter: filter,
    page: page,
    linkHeader: linkHeader
  })
}

exports.fetchError = function (errors) {
  AppDispatcher.handleServerAction({
    type: ActionTypes.FETCH_ERROR,
    errors: errors
  })
}

exports.transition = function (filter) {
  ensureFindable(filter)
  AppDispatcher.handleViewAction({
    type: ActionTypes.TRANSITION
  })
}
