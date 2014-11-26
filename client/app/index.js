var React = require('react')
var {RouteHandler} = require('react-router')

require('./styles/index.scss')

module.exports = React.createClass({

  displayName: 'App',

  render() {
    return (
      <div>
        <RouteHandler />
      </div>
    )
  }

})