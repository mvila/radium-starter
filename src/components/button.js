'use strict';

import Radium from 'radium';
import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';

@Radium
export class Button extends React.Component {
  static propTypes = {
    rsSmall: PropTypes.bool,
    rsLarge: PropTypes.bool,
    rsPrimary: PropTypes.bool,
    rsAccent: PropTypes.bool,
    disabled: PropTypes.bool,
    style: PropTypes.object
  };

  static contextTypes = {
    theme: PropTypes.object.isRequired
  };

  get validity() {
    return this.domElement.validity;
  }

  get value() {
    return this.domElement.value;
  }

  set value(val) {
    this.domElement.value = val;
    return val;
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
    const {theme} = this.context;

    let xPadding;
    let yPadding;
    let fontSize;
    let borderRadius;
    if (this.props.rsSmall) {
      xPadding = theme.smallButtonXPadding;
      yPadding = theme.smallButtonYPadding;
      fontSize = theme.smallFontSize;
      borderRadius = theme.smallBorderRadius;
    } else if (this.props.rsLarge) {
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

    let color;
    let backgroundColor;
    let borderColor;
    let hoveredBackgroundColor;
    let hoveredBorderColor;
    if (this.props.rsPrimary) {
      color = theme.primaryButtonTextColor;
      backgroundColor = theme.primaryButtonBackgroundColor;
      borderColor = theme.primaryButtonBorderColor;
      hoveredBackgroundColor = theme.hoveredPrimaryButtonBackgroundColor;
      hoveredBorderColor = theme.hoveredPrimaryButtonBorderColor;
    } else if (this.props.rsAccent) {
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

    const props = omit(this.props, ['rsSmall', 'rsLarge', 'rsPrimary', 'rsAccent', 'style']);
    return (
      <button
        style={style}
        {...props}
        ref={element => {
          this.domElement = element;
        }}
      />
    );
  }
}

export default Button;
