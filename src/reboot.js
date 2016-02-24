'use strict';

// Credit: https://github.com/twbs/bootstrap/blob/v4-dev/scss/_reboot.scss

class Reboot {
  constructor(theme) {
    Object.assign(this, {
      html: {
        boxSizing: 'border-box',
        fontSize: theme.rootFontSize,
        MsOverflowStyle: 'scrollbar',
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
      },

      '*, *::before, *::after': {
        boxSizing: 'inherit'
      },

      '@at-root @-ms-viewport': {
        width: 'device-width'
      },

      body: {
        fontFamily: theme.baseFontFamily,
        fontSize: theme.baseFontSize,
        lineHeight: theme.baseLineHeight,
        color: theme.primaryTextColor,
        backgroundColor: theme.bodyColor
      },

      '[tabindex="-1"]:focus': {
        outline: 'none !important'
      },

      'h1, h2, h3, h4, h5, h6': {
        marginTop: 0,
        marginBottom: '.5rem'
      },

      p: {
        marginTop: 0,
        marginBottom: '1rem'
      },

      small: {
        fontSize: '87.5%' // Was '80%' in radium-normalize
      },

      address: {
        marginBottom: '1rem',
        fontStyle: 'normal',
        lineHeight: 'inherit'
      },

      'ol, ul, dl': {
        marginTop: 0,
        marginBottom: '1rem'
      },

      'ol ol, ul ul, ol ul, ul ol': {
        marginBottom: 0
      },

      dt: {
        fontWeight: 'bold'
      },

      dd: {
        marginBottom: '.5rem',
        marginLeft: 0
      },

      blockquote: {
        margin: '0 0 1rem'
      },

      a: {
        color: theme.linkColor,
        textDecoration: theme.linkDecoration
      },

      'a:hover': {
        color: theme.linkHoverColor,
        textDecoration: theme.linkHoverDecoration
      },

      pre: {
        marginTop: 0,
        marginBottom: '1rem'
      },

      figure: {
        margin: '0 0 1rem'
      },

      img: {
        verticalAlign: 'middle'
      },

      '[role="button"]': {
        cursor: 'pointer'
      },

      'a, area, button, [role="button"], input, label, select, summary, textarea': {
        touchAction: 'manipulation'
      },

      'input::placeholder, textarea::placeholder': { // From bootstrap/scss/_forms.scss
        color: 'inputPlaceholderColor',
        opacity: 1
      },

      'select::-ms-expand': { // From bootstrap/scss/_forms.scss
        backgroundColor: 'transparent',
        border: 0
      },

      table: {
        backgroundColor: theme.tableBackgroundColor
      },

      caption: {
        paddingTop: theme.tableCellPadding,
        paddingBottom: theme.tableCellPadding,
        color: theme.secondaryTextColor,
        textAlign: 'left',
        captionSide: 'bottom'
      },

      th: {
        textAlign: 'left'
      },

      label: {
        display: 'inline-block',
        marginBottom: 0 // was '.5rem' in Bootstrap 4
      },

      'input, button, select, textarea': {
        margin: 0,
        lineHeight: 'inherit',
        borderRadius: 0
      },

      textarea: {
        resize: 'vertical'
      },

      fieldset: {
        minWidth: 0,
        padding: 0,
        margin: 0,
        border: 0
      },

      legend: {
        display: 'block',
        width: '100%',
        padding: 0,
        marginBottom: '.5rem',
        fontSize: '1.5rem',
        lineHeight: 'inherit'
      },

      'input[type="search"]': {
        WebkitAppearance: 'none'
      },

      '[hidden]': {
        display: 'none !important'
      }
    });
  }
}

export default Reboot;
