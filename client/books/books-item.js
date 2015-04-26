const {Link} = require('react-router')
const React = require('react')

try { require('./books-item.scss') } catch (e) {}

class BooksItem extends React.Component {

  render() {
    return (
      <li className="books-item">
        <Link className="books-item-link" to="book" params={{ id: this.props.book.id }}>
          <img className="books-item-cover" src={this.props.book.cover_url} />
        </Link>
      </li>
    )
  }

}

BooksItem.defaultProps = {
  book: {}
}

module.exports = BooksItem
