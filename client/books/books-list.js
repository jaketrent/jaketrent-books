
var React = require('react')

var BooksItem = require('./books-item')
var LoadMoreItem = require('./load-more-item')

try { require('./books-list.scss') } catch (e) {}

module.exports = React.createClass({

  displayName: 'BooksList',

  propTypes: {
    books: React.PropTypes.array,
    showLoadMore: React.PropTypes.bool
  },

  getDefaultProps() {
    return {
      books: [],
      showLoadMore: true
    }
  },

  renderItems() {
    return this.props.books.map((book) => <BooksItem key={book.id} book={book} />)
  },

  renderLoadMore() {
    if (this.props.showLoadMore)
      return <LoadMoreItem />
  },

  render() {
    return (
      <div className="books-list-container">
        <ul className="books-list">
          {this.renderItems()}
          {this.renderLoadMore()}
        </ul>
      </div>
    )
  }

})
