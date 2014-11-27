const React = require('react')
const {Route} = require('react-router')

module.exports = (
  <Route handler={require('./../app')}>
    <Route name="books" path="/" handler={require('../books')}>
      <Route name="book" path="/books/:id" handler={require('./../books/books-show')} />
    </Route>
  </Route>
)