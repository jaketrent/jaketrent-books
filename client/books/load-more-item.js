
var React = require('react')

const BooksActions = require('./books-actions')

try { require('./load-more-item.scss') } catch (e) {}

module.exports = React.createClass({

  displayName: 'LoadMoreItem',

  handleClickButton(evt) {
    BooksActions.fetch()
  },

  render() {
    return (
      <li className="load-more-item">
        <a className="load-more-item-link" onClick={this.handleClickButton}>
          <div className="load-more-item-dot"></div>
          <div className="load-more-item-dot"></div>
          <div className="load-more-item-dot"></div>
        </a>
      </li>
    )
  }

})
