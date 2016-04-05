'use strict';

function prismStyles(theme) {
  return {
    '.language-bash, .language-javascript': {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      color: '#333',
      background: theme.codeBackgroundColor
    },
    '.token.comment, .token.prolog, .token.doctype, .token.cdata': {
      color: 'slategray'
    },
    '.token.punctuation': {
      color: '#999'
    },
    '.namespace': {
      opacity: 0.7
    },
    '.token.property, .token.tag, .token.boolean, .token.number, .token.constant, .token.symbol, .token.deleted': {
      color: '#905'
    },
    '.token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted': {
      color: '#690'
    },
    '.token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string': {
      color: '#a67f59',
      background: 'hsla(0, 0%, 100%, .5)'
    },
    '.token.atrule, .token.attr-value, .token.keyword': {
      color: theme.darkAccentColor
    },
    '.token.function': {
      color: theme.darkPrimaryColor
    },
    '.token.regex, .token.important, .token.variable': {
      color: '#e90'
    },
    '.token.important, .token.bold': {
      fontWeight: 'bold'
    },
    '.token.italic': {
      fontStyle: 'italic'
    },
    '.token.entity': {
      cursor: 'help'
    }
  };
}

export default prismStyles;
