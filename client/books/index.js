
var React = require('react')

const BookDetail = require('./book-detail')
var BooksList = require('./books-list')

require('./index.scss')

module.exports = React.createClass({

  displayName: 'BooksIndex',

  render() {
    return (
      <div className="books-index">
        <BooksList />
        <BookDetail />
      </div>
    )
  }

})
