const React = require('react')

var logoImg
try { logoImg = require('../app/images/logo.png') } catch(e) {}

class Logo extends React.Component {
  render() {
    if (logoImg)
      return <img className="books-loading-image" src={logoImg} />
    else
      return null
  }
}

module.exports = Logo
