var React = require('react')

require('./styles/index.scss')

module.exports = React.createClass({

  displayName: 'App',

  render() {
    return (
      <div>
        <this.props.activeRouteHandler />
      </div>
    )
  }

})