const React = require('react')
const Router = require('react-router')

const BooksAction = require('./books/books-actions')
const stores = require('./common/stores')
const routes = require('./config/routes')

require('./app/styles/index.scss')

stores.initFromServer()

Router.run(routes, (Handler, state) => {
  React.render(<Handler />, document.getElementById('app'))
  BooksAction.transition(state.params)
})
