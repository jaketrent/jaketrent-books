const React = require('react')
const {RouteHandler} = require('react-router')

const BooksActions = require('../books/books-actions')
const BooksList = require('./books-list')
const BooksStore = require('./books-store')

require('./index.scss')
const LogoImage = require('../app/images/logo.png')

module.exports = React.createClass({

  displayName: 'BooksIndex',

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

  isLoading() {
    return !this.state.books || this.state.books.length < 1
  },

  renderLoading() {
    return <img className="books-loading-image" src={LogoImage} />
  },

  renderPage() {
    return (
      <div>
        <BooksList books={this.state.books} showLoadMore={this.state.hasMoreBooks} />
        <RouteHandler />
      </div>
    )
  },

  render() {
    if (this.isLoading())
      return this.renderLoading()
    else
      return this.renderPage()
  }

})