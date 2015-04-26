const React = require('react')

const BooksItem = require('./books-item')
const LoadMoreItem = require('./load-more-item')

try { require('./books-list.scss') } catch (e) {}

class BooksList extends React.Component {

  constructor(props) {
    super(props)
  }

  renderItems() {
    return this.props.books.map((book, i) => <BooksItem key={`item-${i}`} book={book} />)
  }

  renderLoadMore() {
    if (this.props.showLoadMore)
      return <LoadMoreItem />
  }

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
}

BooksList.propTypes = {
  books: React.PropTypes.array,
  showLoadMore: React.PropTypes.bool
}
BooksList.defaultProps = {
  books: [],
  showLoadMore: true
}


module.exports = BooksList
