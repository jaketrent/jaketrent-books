
var React = require('react')
var BooksItem = require('./books-item')

require('./books-list.scss')

module.exports = React.createClass({

  displayName: 'BooksList',

  getDefaultProps() {
    return {
      books: []
    }
  },

  renderItems() {
    return this.props.books.map((book) => <BooksItem key={book.id} book={book} />)
  },

  render() {
    return (
      <div className="books-list-container">
        <ul className="books-list">
          {this.renderItems()}
        </ul>
      </div>
    )
  }

})
