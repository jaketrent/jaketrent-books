
var React = require('react')

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
          <img className="books-item-cover" src={this.props.book.cover_url} />
        </div>
      </li>
    )
  }

})
