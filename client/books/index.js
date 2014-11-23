
var React = require('react')

var BooksList = require('./books-list')

require('./index.scss')

module.exports = React.createClass({

  displayName: 'BooksIndex',

  render() {
    return (
      <div className="books-index">
        <BooksList />
      </div>
    )
  }

})
