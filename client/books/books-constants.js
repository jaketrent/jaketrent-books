'use strict'

var keyMirror = require('react/lib/keyMirror')

module.exports = {

  ActionTypes: keyMirror({
    FETCH: null,
    FETCH_SUCCESS: null,
    FETCH_ERROR: null,

    TRANSITION: null
  })

}
