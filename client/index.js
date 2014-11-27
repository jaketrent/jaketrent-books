const React = require('react')
const Router = require('react-router')

const BooksAction = require('./books/books-actions')
const routes = require('./config/routes')

Router.run(routes, (Handler, state) => {
  React.render(<Handler />, document.body)
  BooksAction.transition(state.params)
})
