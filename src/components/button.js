'use strict';

import Radium from 'radium';
import React from 'react';
import omit from 'lodash/omit';

@Radium
export class Button extends React.Component {
  static propTypes = {
    small: React.PropTypes.bool,
    large: React.PropTypes.bool,
    primary: React.PropTypes.bool,
    accent: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    style: React.PropTypes.object
  };

  static contextTypes = {
    theme: React.PropTypes.object.isRequired
  };

  blur() {
    this.domElement.blur();
  }

  checkValidity() {
    return this.domElement.checkValidity();
  }

  click() {
    this.domElement.click();
  }

  focus() {
    this.domElement.focus();
  }

  setCustomValidity(error) {
    this.domElement.setCustomValidity(error);
  }

  render() {
    let { theme } = this.context;

    let xPadding, yPadding, fontSize, borderRadius;
    if (this.props.small) {
      xPadding = theme.smallButtonXPadding;
      yPadding = theme.smallButtonYPadding;
      fontSize = theme.smallFontSize;
      borderRadius = theme.smallBorderRadius;
    } else if (this.props.large) {
      xPadding = theme.largeButtonXPadding;
      yPadding = theme.largeButtonYPadding;
      fontSize = theme.largeFontSize;
      borderRadius = theme.largeBorderRadius;
    } else {
      xPadding = theme.buttonXPadding;
      yPadding = theme.buttonYPadding;
      fontSize = theme.baseFontSize;
      borderRadius = theme.borderRadius;
    }

    let color, backgroundColor, borderColor, activeBackgroundColor, activeBorderColor;
    if (this.props.primary) {
      color = theme.primaryButtonTextColor;
      backgroundColor = theme.primaryButtonBackgroundColor;
      borderColor = theme.primaryButtonBorderColor;
      activeBackgroundColor = theme.activePrimaryButtonBackgroundColor;
      activeBorderColor = theme.activePrimaryButtonBorderColor;
    } else if (this.props.accent) {
      color = theme.accentButtonTextColor;
      backgroundColor = theme.accentButtonBackgroundColor;
      borderColor = theme.accentButtonBorderColor;
      activeBackgroundColor = theme.activeAccentButtonBackgroundColor;
      activeBorderColor = theme.activeAccentButtonBorderColor;
    } else {
      color = theme.buttonTextColor;
      backgroundColor = theme.buttonBackgroundColor;
      borderColor = theme.buttonBorderColor;
      activeBackgroundColor = theme.activeButtonBackgroundColor;
      activeBorderColor = theme.activeButtonBorderColor;
    }

    let style = {
      display: 'inline-block',
      paddingTop: yPadding,
      paddingRight: xPadding,
      paddingBottom: yPadding,
      paddingLeft: xPadding,
      fontSize,
      fontWeight: theme.buttonFontWeight,
      lineHeight: theme.buttonLineHeight,
      textAlign: 'center',
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
      color,
      backgroundColor,
      borderWidth: theme.borderWidth,
      borderStyle: 'solid',
      borderColor,
      borderRadius,
      boxShadow: theme.buttonBoxShadow,
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
          boxShadow: theme.activeButtonBoxShadow
        }
      });
    } else {
      Object.assign(style, {
        cursor: theme.disabledCursor,
        opacity: 0.5,
        boxShadow: 'none',
        ':hover': {},
        ':focus': {},
        ':active': {}
      });
    }

    style = [style, this.props.style];

    let props = omit(this.props, ['small', 'large', 'primary', 'accent', 'style']);
    return <button style={style} {...props} ref={element => this.domElement = element} />;
  }
}

export default Button;
