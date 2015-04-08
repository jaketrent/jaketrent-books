'use strict'

var assign = require('react/lib/Object.assign')
var Dispatcher = require('flux').Dispatcher

var AppConstants = require('./app-constants')

var PayloadSources = AppConstants.PayloadSources

module.exports = assign(new Dispatcher(), {

  handleServerAction: function(action) {
    var payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    }
    this.dispatch(payload)
  },

  handleViewAction: function(action) {
    var payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    }
    this.dispatch(payload)
  }

})
