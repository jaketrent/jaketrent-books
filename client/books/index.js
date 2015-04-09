const React = require('react')
const {RouteHandler} = require('react-router')

const BooksActions = require('../books/books-actions')
const BooksList = require('./books-list')
const BooksStore = require('./books-store')

module.exports = React.createClass({

  displayName: 'BooksIndex',

  propTypes: {
    books: React.PropTypes.array
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

  componentWillMount() {
    if (this.props.books) {
      this.setState({ books: this.props.books })
    }
  },

  componentDidMount() {
    if (!this.props.books)
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

  renderPage() {
    return (
      <div>
        <BooksList books={this.state.books} showLoadMore={this.state.hasMoreBooks} />
        <RouteHandler {...this.props} />
      </div>
    )
  },

  render() {
    return this.renderPage()
  }

})