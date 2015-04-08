var React = require('react')

var FormattedDate = require('../common/formatted-date')
var style = require('./book-detail-style')

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
        <a style={style.titleLink} href={this.props.book.affiliate_url} target="_blank">
          <h1 style={style.title}>{this.props.book.title}</h1>
        </a>
      )
    else
      return (
        <h1 style={style.title}>{this.props.book.title}</h1>
      )
  },

  renderReview() {
    if (this.props.book.review_url)
      return (
        <a style={style.reviewLink} href={this.props.book.review_url}>
          My Review
        </a>
      )
  },

  render() {
    if (this.isBookLoaded())
      return (
        <article style={style.root}>

          <header style={style.header}>
            {this.renderTitle()}
            <h2 style={style.author}>{this.props.book.author}</h2>
          </header>

          <div style={style.description}>
            {this.props.book.description}
          </div>

          <footer style={style.footer}>
            <div style={style.complete}>
              completed&nbsp;
              <time dateTime={this.props.book.complete_date}>
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

