'use strict';

import Radium from 'radium';
import React from 'react';
import omit from 'lodash/omit';

export function inputComponentCreator(vars) {
  return @Radium class Input extends React.Component {
    static displayName = 'Input';

    static propTypes = {
      small: React.PropTypes.bool,
      large: React.PropTypes.bool,
      disabled: React.PropTypes.bool,
      readonly: React.PropTypes.bool,
      style: React.PropTypes.object
    };

    render() {
      let xPadding, yPadding, fontSize, borderRadius;
      if (this.props.small) {
        xPadding = vars.$smallInputXPadding;
        yPadding = vars.$smallInputYPadding;
        fontSize = vars.$smallFontSize;
        borderRadius = vars.$smallBorderRadius;
      } else if (this.props.large) {
        xPadding = vars.$largeInputXPadding;
        yPadding = vars.$largeInputYPadding;
        fontSize = vars.$largeFontSize;
        borderRadius = vars.$largeBorderRadius;
      } else {
        xPadding = vars.$inputXPadding;
        yPadding = vars.$inputYPadding;
        fontSize = vars.$baseFontSize;
        borderRadius = vars.$borderRadius;
      }

      let style = {
        paddingTop: yPadding,
        paddingRight: xPadding,
        paddingBottom: yPadding,
        paddingLeft: xPadding,
        fontSize,
        lineHeight: vars.$inputLineHeight,
        color: vars.$inputColor,
        backgroundColor: vars.$inputBackgroundColor,
        backgroundImage: 'none',
        backgroundClip: 'padding-box',
        borderWidth: vars.$borderWidth,
        borderStyle: 'solid',
        borderColor: vars.$inputBorderColor,
        borderRadius,
        boxShadow: vars.$inputBoxShadow,
        transition: 'border-color ease-in-out .15s, box-shadow ease-in-out .15s',
        ':focus': {
          borderColor: vars.$focusedInputBorderColor,
          outline: 'none',
          boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px ' + vars.$focusedInputBoxShadowColor
        }
      };

      if (this.props.disabled || this.props.readonly) {
        style.backgroundColor = vars.$disabledInputBackgroundColor;
        style.opacity = 1;
      }

      if (this.props.disabled) {
        style.cursor = vars.$disabledCursor;
      }

      style = [style, this.props.style];

      let props = omit(this.props, ['small', 'large', 'style']);
      return <input style={style} {...props} />;
    }
  };
}

export default inputComponentCreator;
