
var React = require('react')

require('./books-item.scss')

module.exports = React.createClass({

  displayName: 'BooksItem',

  render() {
    return (
      <li className="books-item">
        <div className="books-item-inner">
          <img className="books-item-cover" src="http://i.imgur.com/RsOmHsb.jpg" />
        </div>
      </li>
    )
  }

})
