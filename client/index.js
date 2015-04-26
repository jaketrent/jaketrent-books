const React = require('react')
const Router = require('react-router')

const BooksActions = require('./books/books-actions')
const stores = require('./common/stores')
const routes = require('./config/routes')

require('./app/styles/index.scss')

stores.initFromServer()

Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  React.render(<Handler {...state.params}/>, document.getElementById('app'), () => {
    BooksActions.transition(state.params)
  })
})
