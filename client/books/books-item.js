
var {Link} = require('react-router')
var React = require('react')

const BooksActions = require('./books-actions')

require('./books-item.scss')

module.exports = React.createClass({

  displayName: 'BooksItem',

  getDefaultProps() {
    return {
      book: {}
    }
  },

  render() {
    return (
      <li className="books-item">
        <div className="books-item-inner">
          <Link className="books-item-link" to="book" params={{ id: this.props.book.id }}>
            <img className="books-item-cover" src={this.props.book.cover_url} />
          </Link>
        </div>
      </li>
    )
  }

})
