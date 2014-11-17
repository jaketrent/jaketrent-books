var React = require('react')
var {Route,Routes} = require('react-router')

module.exports = (
  <Routes>
    <Route handler={require('./../app')}>
      <Route name="index" path="/" handler={require('./../books')} />
    </Route>
  </Routes>
)