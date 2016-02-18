'use strict';

import Radium from 'radium';
import React from 'react';
import omit from 'lodash/omit';
import Color from 'color';

export function buttonComponentCreator(vars) {
  return @Radium class Button extends React.Component {
    static propTypes = {
      size: React.PropTypes.string,
      kind: React.PropTypes.string,
      disabled: React.PropTypes.bool,
      style: React.PropTypes.object
    };

    render() {
      let xPadding, yPadding, fontSize, borderRadius;
      switch (this.props.size) {
        case 'small':
          xPadding = vars.$smallButtonXPadding;
          yPadding = vars.$smallButtonYPadding;
          fontSize = vars.$smallFontSize;
          borderRadius = vars.$smallBorderRadius;
          break;
        case 'large':
          xPadding = vars.$largeButtonXPadding;
          yPadding = vars.$largeButtonYPadding;
          fontSize = vars.$largeFontSize;
          borderRadius = vars.$largeBorderRadius;
          break;
        default:
          xPadding = vars.$buttonXPadding;
          yPadding = vars.$buttonYPadding;
          fontSize = vars.$baseFontSize;
          borderRadius = vars.$borderRadius;
      }

      let color, backgroundColor, borderColor;
      if (this.props.kind === 'primary') {
        color = vars.$buttonPrimaryColor;
        backgroundColor = vars.$buttonPrimaryBackgroundColor;
        borderColor = vars.$buttonPrimaryBorderColor;
      } else {
        color = vars.$buttonSecondaryColor;
        backgroundColor = vars.$buttonSecondaryBackgroundColor;
        borderColor = vars.$buttonSecondaryBorderColor;
      }
      let activeBackgroundColor = Color(backgroundColor).darken(0.1).hexString();
      let activeBorderColor = Color(borderColor).darken(0.12).hexString();


      let style = {
        display: 'inline-block',
        paddingTop: yPadding,
        paddingRight: xPadding,
        paddingBottom: yPadding,
        paddingLeft: xPadding,
        fontSize,
        fontWeight: vars.$buttonFontWeight,
        lineHeight: vars.$buttonLineHeight,
        textAlign: 'center',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        color,
        backgroundColor,
        borderWidth: vars.$borderWidth,
        borderStyle: 'solid',
        borderColor,
        borderRadius,
        boxShadow: vars.$buttonBoxShadow,
        transition: 'all .2s ease-in-out',
        cursor: 'pointer',
        userSelect: 'none'
      };

      if (!this.props.disabled) {
        Object.assign(style, {
          ':hover': {
            color,
            backgroundColor: activeBackgroundColor,
            borderColor: activeBorderColor
          },
          ':focus': {
            color,
            backgroundColor: activeBackgroundColor,
            borderColor: activeBorderColor
          },
          ':active': {
            outline: 0,
            color,
            backgroundColor: activeBackgroundColor,
            borderColor: activeBorderColor,
            backgroundImage: 'none',
            boxShadow: vars.$activeButtonBoxShadow
          }
        });
      } else {
        Object.assign(style, {
          cursor: vars.$disabledCursor,
          opacity: 0.65,
          boxShadow: 'none',
          ':hover': {},
          ':focus': {},
          ':active': {}
        });
      }

      Object.assign(style, this.props.style);
      let otherProps = omit(this.props, 'style');
      return <button style={style} {...otherProps} />;
    }
  };
}

export default buttonComponentCreator;
