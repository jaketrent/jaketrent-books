const React = require('react')
const {RouteHandler} = require('react-router')

const BooksActions = require('../books/books-actions')
const BooksList = require('./books-list')
const BooksStore = require('./books-store')

module.exports = React.createClass({

  displayName: 'BooksLayout',

  componentDidMount() {
    BooksActions.fetch()
  },

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
    BooksActions.fetch()
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
      <div>
        <BooksList books={this.state.books} showLoadMore={this.state.hasMoreBooks} />
        <RouteHandler />
      </div>
    )
  }

})