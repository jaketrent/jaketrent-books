var React = require('react')

var FormattedDate = require('../common/formatted-date')

require('./book-detail.scss')

module.exports = React.createClass({

  displayName: 'BookDetail',

  getDefaultProps() {
    return {
      book: {}
    }
  },

  isBookLoaded() {
    return this.props.book.title
  },

  renderTitle() {
    if (this.props.book.affiliate_url)
      return (
        <a className="book-detail-title-link" href={this.props.book.affiliate_url} target="_blank">
          <h1 className="book-detail-title">{this.props.book.title}</h1>
        </a>
      )
    else
      return (
        <h1 className="book-detail-title">{this.props.book.title}</h1>
      )
  },

  renderReview() {
    if (this.props.book.review_url)
      return (
        <a className="book-detail-review-link" href={this.props.book.review_url}>
          My Review
        </a>
      )
  },

  render() {
    if (this.isBookLoaded())
      return (
        <article className="book-detail">

          <header className="book-detail-header">
            {this.renderTitle()}
            <h2 className="book-detail-author">{this.props.book.author}</h2>
          </header>

          <div className="book-detail-description">
            {this.props.book.description}
          </div>

          <footer className="book-detail-footer">
            <div className="book-detail-complete">
              completed&nbsp;
              <time className="book-detail-complete-date"
                dateTime={this.props.book.complete_date}>
                <FormattedDate date={this.props.book.complete_date} />
              </time>
            </div>

            {this.renderReview()}
          </footer>

        </article>
      )
    else
      return null
  }

})

