'use strict';

import Radium from 'radium';
import React from 'react';
import omit from 'lodash/omit';

@Radium
export class Control extends React.Component {
  static propTypes = {
    rsSmall: React.PropTypes.bool,
    rsLarge: React.PropTypes.bool,
    rsAutoSelect: React.PropTypes.bool,
    rsCustomValidity: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    readonly: React.PropTypes.bool,
    style: React.PropTypes.object
  };

  static contextTypes = {
    theme: React.PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = { actualProps: this.createActualProps(props) };
  }

  componentDidMount() {
    if (this.props.rsAutoSelect) this.select();
    this.updateCustomValidity(this.props.rsCustomValidity);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ actualProps: this.createActualProps(nextProps) });
    this.updateCustomValidity(nextProps.rsCustomValidity);
  }

  createActualProps(props) {
    let { theme } = this.context;

    let actualProps = omit(props, ['rsSmall', 'rsLarge', 'rsAutoSelect', 'rsCustomValidity']);

    let xPadding, yPadding, fontSize, borderRadius;
    if (props.rsSmall) {
      xPadding = theme.smallInputXPadding;
      yPadding = theme.smallInputYPadding;
      fontSize = theme.smallFontSize;
      borderRadius = theme.smallBorderRadius;
    } else if (props.rsLarge) {
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
      outline: 'none',
      boxShadow: 'none',
      transition: 'border-color ease-in-out .15s',
      ':focus': {
        borderColor: theme.focusedInputBorderColor
      }
    };

    if (actualProps.disabled || actualProps.readonly) {
      style.backgroundColor = theme.disabledInputBackgroundColor;
      style.opacity = 1;
    }

    if (actualProps.disabled) {
      style.cursor = theme.disabledCursor;
    }

    actualProps.style = [style, actualProps.style];

    actualProps.ref = element => this.domElement = element;

    return actualProps;
  }

  updateCustomValidity(value) {
    if (value != null) {
      if (value !== this._previousCustomValidity) {
        this.domElement.setCustomValidity(value);
        this._previousCustomValidity = value;
      }
    }
  }

  getValidationMessage() {
    let validationMessage;
    if (this.domElement && this.domElement.validity && this.domElement.validity.customError) {
      if (this.domElement.form) {
        let classNames = this.domElement.form.className.split(' ');
        if (classNames.includes('submitted')) {
          validationMessage = this.domElement.validationMessage;
        }
      }
    }
    return validationMessage;
  }

  render() {
    return ( // TODO: use a tooltip to display the validation message
      <span>
        {React.createElement(this.constructor.tagName, this.state.actualProps)}
        {' '}
        <span>{this.getValidationMessage()}</span>
      </span>
    );
  }

  // === DOM element properties and methods ===

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
}

export default Control;
