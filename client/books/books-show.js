const React = require('react')
const {State} = require('react-router')

const BookDetail = require('./book-detail')
const BooksList = require('./books-list')
const BooksStore = require('./books-store')

module.exports = React.createClass({

  displayName: 'BooksShow',

  mixins: [ State ],

  getInitialState() {
    return this.getStateFromStores()
  },

  getStateFromStores() {
    return {
      book: BooksStore.find({ id: this.getParams().id })
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
