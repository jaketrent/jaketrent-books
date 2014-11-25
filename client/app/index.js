var React = require('react')

var BooksActions = require('../books/books-actions')

require('./styles/index.scss')

module.exports = React.createClass({

  displayName: 'App',

  componentDidMount() {
    BooksActions.fetch()
  },

  render() {
    return (
      <div>
        <this.props.activeRouteHandler />
      </div>
    )
  }

})