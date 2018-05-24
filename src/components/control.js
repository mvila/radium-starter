'use strict';

import Radium from 'radium';
import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';

@Radium
export class Control extends React.Component {
  static propTypes = {
    rsSmall: PropTypes.bool,
    rsLarge: PropTypes.bool,
    rsAutoSelect: PropTypes.bool,
    rsCustomValidity: PropTypes.string,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    style: PropTypes.object
  };

  static contextTypes = {
    theme: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {actualProps: this.createActualProps(props)};
  }

  componentDidMount() {
    if (this.props.rsAutoSelect) {
      this.select();
    }
    this.updateCustomValidity(this.props.rsCustomValidity);
  }

  /* eslint-disable camelcase */
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({actualProps: this.createActualProps(nextProps)});
    this.updateCustomValidity(nextProps.rsCustomValidity);
  }
  /* eslint-enable camelcase */

  createActualProps(props) {
    const {theme} = this.context;

    const actualProps = omit(props, ['rsSmall', 'rsLarge', 'rsAutoSelect', 'rsCustomValidity']);

    let xPadding;
    let yPadding;
    let fontSize;
    let borderRadius;
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

    const style = {
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

    actualProps.ref = element => {
      this.domElement = element;
    };

    return actualProps;
  }

  updateCustomValidity(value) {
    if (value !== undefined) {
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
        const classNames = this.domElement.form.className.split(' ');
        if (classNames.includes('submitted')) {
          validationMessage = this.domElement.validationMessage;
        }
      }
    }
    return validationMessage;
  }

  render() {
    return (
      // TODO: use a tooltip to display the validation message
      <span>
        {React.createElement(this.constructor.tagName, this.state.actualProps)}{' '}
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
    this.domElement.value = val;
    return val;
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
