const React = require('react')
const Router = require('react-router')

const BooksAction = require('./books/books-actions')
const routes = require('./config/routes')

if (window.initalState) {
  alert('awesome');
}

Router.run(routes, (Handler, state) => {
  React.render(<Handler />, document.getElementById('app'))
  BooksAction.transition(state.params)
})
