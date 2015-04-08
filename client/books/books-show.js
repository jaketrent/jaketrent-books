const React = require('react')

const BookDetail = require('./book-detail')
const BooksList = require('./books-list')
const BooksStore = require('./books-store')

module.exports = React.createClass({

  displayName: 'BooksShow',

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState() {
    return this.getStateFromStores()
  },

  getStateFromStores() {
    return {
      book: BooksStore.find({ id: this.context.router.getCurrentParams().id })
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
