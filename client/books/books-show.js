const React = require('react')

const BookDetail = require('./book-detail')
const BooksStore = require('./books-store')

class BooksShow extends React.Component {

  constructor(props) {
    super(props)
    this.state = this.getStateFromStores()
    this._onChange = this._onChange.bind(this)
  }

  getStateFromStores() {
    return {
      // `id` prop from router params -- used instead of context.router in es6-style class
      book: BooksStore.find({ id: this.props.id })
    }
  }

  componentWillMount() {
    if (Array.isArray(this.props.books) && this.props.books.length > 0) {
      this.setState({ book: this.props.books[0] })
    }
  }

  componentDidMount() {
    BooksStore.addChangeListener(this._onChange)
  }

  componentWillUnmount() {
    BooksStore.removeChangeListener(this._onChange)
  }

  _onChange() {
    this.setState(this.getStateFromStores())
  }

  render() {
    return (
      <BookDetail book={this.state.book} />
    )
  }

}

BooksShow.propTypes = {
  books: React.PropTypes.array
}

module.exports = BooksShow
