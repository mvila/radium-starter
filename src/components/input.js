'use strict';

import Radium from 'radium';
import React from 'react';
import omit from 'lodash/omit';

@Radium
export class Input extends React.Component {
  static propTypes = {
    small: React.PropTypes.bool,
    large: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    readonly: React.PropTypes.bool,
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

  select() {
    this.domElement.select();
  }

  setCustomValidity(error) {
    this.domElement.setCustomValidity(error);
  }

  setRangeText(...args) {
    this.domElement.setRangeText.apply(this, args);
  }

  render() {
    let { theme } = this.context;

    let xPadding, yPadding, fontSize, borderRadius;
    if (this.props.small) {
      xPadding = theme.smallInputXPadding;
      yPadding = theme.smallInputYPadding;
      fontSize = theme.smallFontSize;
      borderRadius = theme.smallBorderRadius;
    } else if (this.props.large) {
      xPadding = theme.largeInputXPadding;
      yPadding = theme.largeInputYPadding;
      fontSize = theme.largeFontSize;
      borderRadius = theme.largeBorderRadius;
    } else {
      xPadding = theme.inputXPadding;
      yPadding = theme.inputYPadding;
      fontSize = theme.baseFontSize;
      borderRadius = theme.borderRadius;
    }

    let style = {
      paddingTop: yPadding,
      paddingRight: xPadding,
      paddingBottom: yPadding,
      paddingLeft: xPadding,
      fontSize,
      lineHeight: theme.inputLineHeight,
      color: theme.inputTextColor,
      backgroundColor: theme.inputBackgroundColor,
      backgroundImage: 'none',
      backgroundClip: 'padding-box',
      borderWidth: theme.inputBorderWidth,
      borderStyle: 'solid',
      borderColor: theme.inputBorderColor,
      borderRadius,
      boxShadow: theme.inputBoxShadow,
      transition: 'border-color ease-in-out .15s, box-shadow ease-in-out .15s',
      ':focus': {
        borderColor: theme.focusedInputBorderColor,
        outline: 'none',
        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px ' + theme.focusedInputBoxShadowColor
      }
    };

    if (this.props.disabled || this.props.readonly) {
      style.backgroundColor = theme.disabledInputBackgroundColor;
      style.opacity = 1;
    }

    if (this.props.disabled) {
      style.cursor = theme.disabledCursor;
    }

    style = [style, this.props.style];

    let props = omit(this.props, ['small', 'large', 'style']);
    return <input style={style} {...props} ref={element => this.domElement = element}/>;
  }
}

export default Input;
