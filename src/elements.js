'use strict';

import merge from 'lodash/merge';
import normalize from 'radium-normalize';
import Reboot from './reboot';

class Elements {
  constructor(vars) {
    merge(this, normalize);

    let reboot = new Reboot(vars);
    merge(this, reboot);

    merge(this, {
      'h1, h2, h3, h4, h5, h6': {
        marginBottom: vars.$headingsMarginBottom,
        fontFamily: vars.$headingsFontFamily,
        fontWeight: vars.$headingsFontWeight,
        lineHeight: vars.$headingsLineHeight,
        color: vars.$headingsColor
      },

      h1: { fontSize: vars.$h1FontSize },
      h2: { fontSize: vars.$h2FontSize },
      h3: { fontSize: vars.$h3FontSize },
      h4: { fontSize: vars.$h4FontSize },
      h5: { fontSize: vars.$h5FontSize },
      h6: { fontSize: vars.$h6FontSize },

      hr: {
        marginTop: vars.$spacer,
        marginBottom: vars.$spacer,
        border: 0,
        borderTop: `${vars.$borderWidth} solid ${vars.$borderColor}`
      },

      small: {
        fontWeight: 'normal'
      },

      'form.submitted input:invalid, form.submitted select:invalid, form.submitted textarea:invalid': {
        borderColor: `${vars.$errorColor} !important`
      },

      'code, kbd, pre, samp': {
        fontFamily: vars.$monospaceFontFamily
      },

      code: {
        padding: '.2rem .4rem',
        fontSize: '90%',
        color: vars.$codeColor,
        backgroundColor: vars.$codeBackgroundColor,
        borderRadius: vars.$borderRadius
      },

      pre: {
        display: 'block',
        marginTop: 0,
        marginBottom: '1rem',
        fontSize: '90%',
        color: vars.$preColor
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
