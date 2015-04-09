const React = require('react')

const BookDetail = require('./book-detail')
const BooksList = require('./books-list')
const BooksStore = require('./books-store')

module.exports = React.createClass({

  displayName: 'BooksShow',

  contextTypes: {
    router: React.PropTypes.func
  },

  propTypes: {
    books: React.PropTypes.array
  },

  getInitialState() {
    return this.getStateFromStores()
  },

  getStateFromStores() {
    return {
      book: BooksStore.find({ id: this.context.router.getCurrentParams().id })
    }
  },

  componentWillMount() {
    if (Array.isArray(this.props.books) && this.props.books.length > 0) {
      this.setState({ book: this.props.books[0] })
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
      <BookDetail book={this.state.book} />
    )
  }

})
