var Link = require('react-router').Link
var React = require('react')

require('./book-detail.scss')

module.exports = React.createClass({

  displayName: 'BookDetail',

  renderTitle() {
    // TODO: handle link if exists
    return (
      <h1 className="book-detail-title">Quitter</h1>
    )
  },

  renderReview() {
    // TODO: handle hiding if no link
    return (
      <Link className="book-detail-review-link" to="book" params={{id: '123'}}>My Review</Link>
    )
  },

  render() {
    return (
      <article className="book-detail">

        <header className="book-detail-header">
          {this.renderTitle()}
          <h2 className="book-detail-author">Jon Acuff</h2>
        </header>

        <div className="book-detail-description">
          Be calm for whoever balances, because each has been shaped with love.
          Resurrection is the only result, the only guarantee of history.
          Festus, bi-color valebats nunquam acquirere de azureus, pius nomen.
          Lentils stew has to have a yellow, niffy chickpeas component.
          Aww! Pieces o' amnesty are forever stormy.
          Where is the united c-beam?  Suns walk with x-ray vision at the clear habitat bravelyalways, indeed!
        </div>

        <footer className="book-detail-footer">
          <div className="book-detail-complete">
          read&nbsp;
            <time className="book-detail-complete-date"
              dateTime="2001-05-15 19:00">
            23 Nov 2014
            </time>
          </div>

          {this.renderReview()}
        </footer>

      </article>
    )
  }

})

