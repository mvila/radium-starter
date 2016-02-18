'use strict';

import Radium from 'radium';
import React from 'react';
import omit from 'lodash/omit';

export function inputComponentCreator(vars) {
  return @Radium class Input extends React.Component {
    static propTypes = {
      size: React.PropTypes.string,
      disabled: React.PropTypes.bool,
      readonly: React.PropTypes.bool,
      style: React.PropTypes.object
    };

    render() {
      let xPadding, yPadding, fontSize, borderRadius;
      switch (this.props.size) {
        case 'small':
          xPadding = vars.$smallInputXPadding;
          yPadding = vars.$smallInputYPadding;
          fontSize = vars.$smallFontSize;
          borderRadius = vars.$smallBorderRadius;
          break;
        case 'large':
          xPadding = vars.$largeInputXPadding;
          yPadding = vars.$largeInputYPadding;
          fontSize = vars.$largeFontSize;
          borderRadius = vars.$largeBorderRadius;
          break;
        default:
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

      Object.assign(style, this.props.style);
      let otherProps = omit(this.props, 'style');

      return <input style={style} {...otherProps} />;
    }
  };
}

export default inputComponentCreator;
