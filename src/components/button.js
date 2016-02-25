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

  get validity() {
    return this.domElement.validity;
  }

  get value() {
    return this.domElement.value;
  }
  set value(val) {
    return this.domElement.value = val;
  }

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

    let color, backgroundColor, borderColor, hoveredBackgroundColor, hoveredBorderColor;
    if (this.props.primary) {
      color = theme.primaryButtonTextColor;
      backgroundColor = theme.primaryButtonBackgroundColor;
      borderColor = theme.primaryButtonBorderColor;
      hoveredBackgroundColor = theme.hoveredPrimaryButtonBackgroundColor;
      hoveredBorderColor = theme.hoveredPrimaryButtonBorderColor;
    } else if (this.props.accent) {
      color = theme.accentButtonTextColor;
      backgroundColor = theme.accentButtonBackgroundColor;
      borderColor = theme.accentButtonBorderColor;
      hoveredBackgroundColor = theme.hoveredAccentButtonBackgroundColor;
      hoveredBorderColor = theme.hoveredAccentButtonBorderColor;
    } else {
      color = theme.buttonTextColor;
      backgroundColor = theme.buttonBackgroundColor;
      borderColor = theme.buttonBorderColor;
      hoveredBackgroundColor = theme.hoveredButtonBackgroundColor;
      hoveredBorderColor = theme.hoveredButtonBorderColor;
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
      outline: 'none',
      transition: 'all .2s ease-in-out',
      cursor: 'pointer',
      userSelect: 'none'
    };

    if (!this.props.disabled) {
      Object.assign(style, {
        ':hover': {
          color,
          backgroundColor: hoveredBackgroundColor,
          borderColor: hoveredBorderColor
        }
      });
    } else {
      Object.assign(style, {
        cursor: theme.disabledCursor,
        opacity: 0.5,
        ':hover': {}
      });
    }

    style = [style, this.props.style];

    let props = omit(this.props, ['small', 'large', 'primary', 'accent', 'style']);
    return <button style={style} {...props} ref={element => this.domElement = element} />;
  }
}

export default Button;
