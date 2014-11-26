const React = require('react')
const {Route} = require('react-router')

module.exports = (
  <Route handler={require('./../app')}>
    <Route handler={require('../books/books-layout')}>
      <Route name="books" path="/" handler={require('./../books')} />
      <Route name="book" path="/books/:id" handler={require('./../books/books-show')} />
    </Route>
  </Route>
)