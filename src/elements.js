'use strict';

import merge from 'lodash/merge';
import normalize from 'radium-normalize';
import Reboot from './reboot';

class Elements {
  constructor(theme) {
    merge(this, normalize);

    let reboot = new Reboot(theme);
    merge(this, reboot);

    merge(this, {
      'h1, h2, h3, h4, h5, h6': {
        marginBottom: theme.headingsMarginBottom,
        fontFamily: theme.headingsFontFamily,
        fontWeight: theme.headingsFontWeight,
        lineHeight: theme.headingsLineHeight,
        color: theme.headingsColor
      },

      h1: { fontSize: theme.h1FontSize },
      h2: { fontSize: theme.h2FontSize },
      h3: { fontSize: theme.h3FontSize },
      h4: { fontSize: theme.h4FontSize },
      h5: { fontSize: theme.h5FontSize },
      h6: { fontSize: theme.h6FontSize },

      hr: {
        marginTop: '1rem',
        marginBottom: '1rem',
        border: 0,
        borderTop: `${theme.borderWidth} solid ${theme.borderColor}`
      },

      small: {
        fontWeight: 'normal'
      },

      'form.submitted input:invalid, form.submitted select:invalid, form.submitted textarea:invalid': {
        borderColor: `${theme.errorColor} !important`
      },

      'code, kbd, pre, samp': {
        fontFamily: theme.monospaceFontFamily
      },

      code: {
        padding: '.2rem .4rem',
        fontSize: '90%',
        color: theme.codeColor,
        backgroundColor: theme.codeBackgroundColor,
        borderRadius: theme.borderRadius
      },

      pre: {
        display: 'block',
        marginTop: 0,
        marginBottom: '1rem',
        fontSize: '90%',
        color: theme.preColor
      },

      'pre code': {
        padding: 0,
        fontSize: 'inherit',
        color: 'inherit',
        backgroundColor: 'transparent',
        borderRadius: 0
      }
    });
  }
}

export default Elements;
