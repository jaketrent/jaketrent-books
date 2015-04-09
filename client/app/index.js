var React = require('react')
var {RouteHandler} = require('react-router')

module.exports = React.createClass({

  displayName: 'App',

  render() {
    return (
      <div>
        <RouteHandler {...this.props} />
      </div>
    )
  }

})