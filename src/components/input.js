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
    style: React.PropTypes.object,
    autoSelect: React.PropTypes.bool,
    customValidity: React.PropTypes.string
  };

  static contextTypes = {
    theme: React.PropTypes.object.isRequired
  };

  componentDidMount() {
    if (this.props.autoSelect) this.select();
    this.updateCustomValidity(this.props.customValidity);
  }

  componentWillReceiveProps(nextProps) {
    this.updateCustomValidity(nextProps.customValidity);
  }

  updateCustomValidity(value) {
    if (value != null) {
      if (value !== this._previousCustomValidity) {
        this.domElement.setCustomValidity(value);
        this._previousCustomValidity = value;
      }
    }
  }

  get checked() {
    return this.domElement.checked;
  }
  set checked(val) {
    return this.domElement.checked = val;
  }

  get files() {
    return this.domElement.files;
  }

  get validity() {
    return this.domElement.validity;
  }

  get value() {
    return this.domElement.value;
  }
  set value(val) {
    return this.domElement.value = val;
  }

  get valueAsDate() {
    return this.domElement.valueAsDate;
  }
  set valueAsDate(val) {
    return this.domElement.valueAsDate = val;
  }

  get valueAsNumber() {
    return this.domElement.valueAsNumber;
  }
  set valueAsNumber(val) {
    return this.domElement.valueAsNumber = val;
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
      transition: 'border-color ease-in-out .15s',
      ':focus': {
        borderColor: theme.focusedInputBorderColor,
        outline: 'none'
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

    let validationMessage;
    if (this.domElement && this.domElement.validity && this.domElement.validity.customError) {
      if (this.domElement.form) {
        let classNames = this.domElement.form.className.split(' ');
        if (classNames.includes('submitted')) {
          validationMessage = this.domElement.validationMessage;
        }
      }
    }

    let props = omit(this.props, ['small', 'large', 'style', 'autoSelect', 'customValidity']);
    return ( // TODO: use a tooltip to display the validation message
      <span>
        <input style={style} {...props} ref={element => this.domElement = element}/>
        {' '}
        <span>{validationMessage}</span>
      </span>
    );
  }
}

export default Input;
