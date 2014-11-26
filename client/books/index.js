
const React = require('react')

const BookDetail = require('./book-detail')
const BooksList = require('./books-list')
const BooksStore = require('./books-store')

require('./index.scss')

module.exports = React.createClass({

  displayName: 'BooksIndex',

  getInitialState() {
    return this.getStateFromStores()
  },

  getStateFromStores() {
    return {
      books: BooksStore.find(),
      hasMoreBooks: BooksStore.hasNextPage()
    }
  },

  componentDidMount() {
    BooksStore.addChangeListener(this._onChange)
  },

  componentWillUnmount() {
    BooksStore.removeChangeListener(this._onChange)
  },

  _onChange: function() {
    this.setState(this.getStateFromStores())
  },

  render() {
    return (
      <div className="books-index">
        List of stuff
      </div>
    )
  }

})
