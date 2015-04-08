var StyleSheet = require('react-style')
var Color = require('color')

var bookDetailWidth = 600
var bookDetailColor = '#2b2425'
var bookDetailFooterColor = Color(bookDetailColor).lighten(0.3).hexString()
var iphone6PlusWidth = 414;

module.exports = StyleSheet.create({
  root: {
    maxWidth: '100%',
    width: bookDetailWidth,
    margin: '0 auto',
    paddingBottom: '50px',
    color: bookDetailColor
  },
  header: {
    marginBottom: '30px'
  },
  title: {
    margin: '0 0 10px 0',
    fontSize: '40px',
    lineHeight: '1.2em',
    fontFamily: '"Antic Slab", sans-serif'
  },
  titleLink: {
    color: bookDetailColor,
    textDecoration: 'none'
  },
  author: {
    margin: 0,
    fontSize: '20px',
    fontWeight: 'lighter',
    fontStyle: 'italic'
  },
  description: {
    fontSize: '16px',
    lineHeight: '28px'
  },
  footer: {
    marginTop: '16px',
    paddingTop: '16px',
    borderTop: '1px solid #000',
    color: bookDetailFooterColor,
    fontSize: '14px'
  },
  complete: {
    display: 'inline-block',
    marginRight: '30px'
  },
  reviewLink: {
    display: 'inline-block',
    color: bookDetailFooterColor
  },
  // TODO: make variable w/ es6?
  '@media all and (max-width: 640px)': {
    root: {
      paddingLeft: '20px',
      paddingRight: '20px'
    }
  },
  // TODO: make variable w/ es6?
  '@media all and (max-width: 414px)': {
    title: {
      fontSize: '30px'
    },
    author: {
      fontSize: '14px'
    }
  }
})