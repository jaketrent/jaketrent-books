var React = require('react')

module.exports = React.createClass({

  displayName: 'App',

  render() {
    return (
      <div>
        {this.props.activeRouteHandler()}
      </div>
    )
  }

})