
var range = require('lodash-node/modern/arrays/range')
var React = require('react')
var BooksItem = require('./books-item')

require('./books-list.scss')

module.exports = React.createClass({

  displayName: 'BooksList',

  renderItems() {
    return range(8).map(() => <BooksItem />)
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
