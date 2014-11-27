const moment = require('moment')
const React = require('react')

module.exports = React.createClass({

  displayName: 'FormattedDate',

  propTypes: {
    date: React.PropTypes.string,
    format: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      format: 'D MMM YYYY'
    }
  },

  render() {
    if (this.props.date)
      return (
        <span>{moment(this.props.date).format(this.props.format)}</span>
      )
    else
      return null
  }

})