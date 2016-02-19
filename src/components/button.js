'use strict';

import Radium from 'radium';
import React from 'react';
import omit from 'lodash/omit';
import Color from 'color';

export function buttonComponentCreator(vars) {
  return @Radium class Button extends React.Component {
    static displayName = 'Button';

    static propTypes = {
      small: React.PropTypes.bool,
      large: React.PropTypes.bool,
      primary: React.PropTypes.bool,
      secondary: React.PropTypes.bool,
      disabled: React.PropTypes.bool,
      style: React.PropTypes.object
    };

    render() {
      let xPadding, yPadding, fontSize, borderRadius;
      if (this.props.small) {
        xPadding = vars.$smallButtonXPadding;
        yPadding = vars.$smallButtonYPadding;
        fontSize = vars.$smallFontSize;
        borderRadius = vars.$smallBorderRadius;
      } else if (this.props.large) {
        xPadding = vars.$largeButtonXPadding;
        yPadding = vars.$largeButtonYPadding;
        fontSize = vars.$largeFontSize;
        borderRadius = vars.$largeBorderRadius;
      } else {
        xPadding = vars.$buttonXPadding;
        yPadding = vars.$buttonYPadding;
        fontSize = vars.$baseFontSize;
        borderRadius = vars.$borderRadius;
      }

      let color, backgroundColor, borderColor;
      if (this.props.primary) {
        color = vars.$buttonPrimaryColor;
        backgroundColor = vars.$buttonPrimaryBackgroundColor;
        borderColor = vars.$buttonPrimaryBorderColor;
      } else if (this.props.secondary) {
        color = vars.$buttonSecondaryColor;
        backgroundColor = vars.$buttonSecondaryBackgroundColor;
        borderColor = vars.$buttonSecondaryBorderColor;
      } else {
        color = vars.$buttonColor;
        backgroundColor = vars.$buttonBackgroundColor;
        borderColor = vars.$buttonBorderColor;
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

      style = [style, this.props.style];

      let props = omit(this.props, ['small', 'large', 'primary', 'secondary', 'style']);
      return <button style={style} {...props} />;
    }
  };
}

export default buttonComponentCreator;
