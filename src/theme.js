'use strict';

import EventEmitterMixin from 'event-emitter-mixin';
import Color from 'color';
import reduceCSSCalc from 'reduce-css-calc';

export class Theme extends EventEmitterMixin() {
  constructor(customAttributes = {}) {
    super();

    if (typeof customAttributes === 'function') {
      customAttributes = customAttributes(this);
    }

    this.customAttributes = customAttributes;

    for (const name of Object.keys(customAttributes)) {
      if (!(name in this)) {
        const descriptor = {};
        def(this, name, descriptor);
        Object.defineProperty(this, name, descriptor);
      }
    }
  }

  // --- Base colors ---

  // Material Design Blue 500
  @def primaryColor = '#2196F3';

  // Material Design Red A200
  @def accentColor = '#FF5252';

  @def bodyColor = '#FFF';

  @def borderColor = 'rgba(0,0,0,.12)';

  @def
  darkPrimaryColor = Color(this.primaryColor)
    .darken(0.3)
    .string();

  @def
  lightPrimaryColor = Color(this.primaryColor)
    .lighten(0.6)
    .string();

  @def
  darkAccentColor = Color(this.accentColor)
    .darken(0.4)
    .string();

  @def
  lightAccentColor = Color(this.accentColor)
    .lighten(0.3)
    .string();

  @def
  altBodyColor = Color(this.bodyColor)
    .darken(0.03)
    .string();

  @def
  altBorderColor = Color(this.borderColor)
    .opaquer(0.3)
    .string();

  @def baseTextColor = '#000';

  @def
  primaryTextColor = Color(this.baseTextColor)
    .alpha(0.87)
    .string();

  @def
  secondaryTextColor = Color(this.baseTextColor)
    .alpha(0.54)
    .string();

  @def
  mutedTextColor = Color(this.baseTextColor)
    .alpha(0.38)
    .string();

  @def baseInverseTextColor = '#FFF';

  @def
  inversePrimaryTextColor = Color(this.baseInverseTextColor)
    .alpha(1)
    .string();

  @def
  inverseSecondaryTextColor = Color(this.baseInverseTextColor)
    .alpha(0.7)
    .string();

  @def
  inverseMutedTextColor = Color(this.baseInverseTextColor)
    .alpha(0.5)
    .string();

  // Material Design Red 500
  @def errorColor = '#F44336';

  // Material Design Orange 500
  @def warningColor = '#FF9800';

  // --- Links ---

  @def linkColor = this.accentColor;

  @def linkDecoration = 'none';

  @def hoveredLinkColor = this.darkAccentColor;

  @def hoveredLinkDecoration = 'underline';

  // --- Typography ---

  @def
  sansSerifFontFamily = '-apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\', Arial, sans-serif';

  @def serifFontFamily = 'Georgia, \'Times New Roman\', Times, serif';

  @def monospaceFontFamily = 'Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace';

  @def rootFontSize = '16px';

  @def baseFontFamily = this.sansSerifFontFamily;

  @def baseFontSize = '1rem';

  // http://www.modularscale.com/?1&em&1.2&web&text

  @def modularScaleRatio = 1.2;

  modularScale(value, base = this.baseFontSize, ratio = this.modularScaleRatio) {
    const multiplier = Math.pow(ratio, value);
    return reduceCSSCalc(`calc(${base} * ${multiplier})`);
  }

  // 1.44
  @def baseLineHeight = this.modularScale(2, 1);

  // 1.2
  @def smallLineHeight = this.modularScale(1, 1);

  // '.833rem'
  @def smallFontSize = this.modularScale(-1);

  // '1.2rem'
  @def largeFontSize = this.modularScale(1);

  @def headingsMarginBottom = '1rem';

  @def headingsFontFamily = 'inherit';

  @def headingsFontWeight = 'bold';

  @def headingsLineHeight = this.smallLineHeight;

  @def headingsColor = 'inherit';

  // '2.488rem'
  @def h1FontSize = this.modularScale(5);

  // '2.074rem'
  @def h2FontSize = this.modularScale(4);

  // '1.728rem'
  @def h3FontSize = this.modularScale(3);

  // '1.44rem'
  @def h4FontSize = this.modularScale(2);

  // '1.2rem'
  @def h5FontSize = this.modularScale(1);

  // '1rem'
  @def h6FontSize = this.modularScale(0);

  // --- Borders ---

  @def borderWidth = '1px';

  @def borderRadius = '.25rem';

  @def smallBorderRadius = '.2rem';

  @def largeBorderRadius = '.3rem';

  // --- Tables ---

  @def tableBackgroundColor = 'transparent';

  @def tableCellPadding = '.75rem';

  // --- Code ---

  @def codeColor = this.darkPrimaryColor;

  @def codeBackgroundColor = this.altBodyColor;

  @def preColor = this.secondaryTextColor;

  @def preBackgroundColor = undefined;

  // --- Buttons ---

  @def buttonFontWeight = 'normal';

  @def buttonLineHeight = this.smallLineHeight;

  @def buttonXPadding = '1rem';

  @def buttonYPadding = '.5rem';

  @def smallButtonXPadding = '.5rem';

  @def smallButtonYPadding = '.25rem';

  @def largeButtonXPadding = '1.25rem';

  @def largeButtonYPadding = '.75rem';

  @def buttonTextColor = this.primaryTextColor;

  @def buttonBackgroundColor = this.bodyColor;

  @def buttonBorderColor = this.borderColor;

  @def hoveredButtonBackgroundColor = this.altBodyColor;

  @def hoveredButtonBorderColor = this.altBorderColor;

  @def primaryButtonTextColor = this.inversePrimaryTextColor;

  @def primaryButtonBackgroundColor = this.primaryColor;

  @def primaryButtonBorderColor = this.primaryButtonBackgroundColor;

  @def hoveredPrimaryButtonBackgroundColor = this.darkPrimaryColor;

  @def hoveredPrimaryButtonBorderColor = this.hoveredPrimaryButtonBackgroundColor;

  @def accentButtonTextColor = this.inversePrimaryTextColor;

  @def accentButtonBackgroundColor = this.accentColor;

  @def accentButtonBorderColor = this.accentButtonBackgroundColor;

  @def hoveredAccentButtonBackgroundColor = this.darkAccentColor;

  @def hoveredAccentButtonBorderColor = this.hoveredAccentButtonBackgroundColor;

  // --- Inputs ---

  @def inputLineHeight = this.smallLineHeight;

  @def inputTextColor = this.primaryTextColor;

  @def inputBackgroundColor = this.bodyColor;

  @def inputBorderWidth = this.borderWidth;

  @def inputBorderColor = this.borderColor;

  @def inputPlaceholderColor = this.mutedTextColor;

  @def focusedInputBorderColor = this.primaryColor;

  @def disabledInputBackgroundColor = this.altBodyColor;

  @def inputXPadding = '.625rem';

  @def inputYPadding = '.5rem';

  @def smallInputXPadding = '.375rem';

  @def smallInputYPadding = '.25rem';

  @def largeInputXPadding = '.875rem';

  @def largeInputYPadding = '.75rem';

  // --- Other ---

  @def disabledCursor = 'not-allowed';

  // --- Breakpoints ---

  @def smallBreakpoint = '640px';

  @def smallBreakpointMinusOne = reduceCSSCalc(`calc(${this.smallBreakpoint} - 1px)`);

  @def smallBreakpointPlusOne = reduceCSSCalc(`calc(${this.smallBreakpoint} + 1px)`);

  @def mediumBreakpoint = '1024px';

  @def mediumBreakpointMinusOne = reduceCSSCalc(`calc(${this.mediumBreakpoint} - 1px)`);

  @def mediumBreakpointPlusOne = reduceCSSCalc(`calc(${this.mediumBreakpoint} + 1px)`);

  @def largeBreakpoint = '1440px';

  @def largeBreakpointMinusOne = reduceCSSCalc(`calc(${this.largeBreakpoint} - 1px)`);

  @def largeBreakpointPlusOne = reduceCSSCalc(`calc(${this.largeBreakpoint} + 1px)`);
}

function def(target, name, descriptor) {
  const initializer = descriptor.initializer;
  delete descriptor.initializer;
  delete descriptor.writable;
  descriptor.get = function () {
    if (
      this.customAttributes &&
      Object.prototype.hasOwnProperty.call(this.customAttributes, name)
    ) {
      let value = this.customAttributes[name];
      if (typeof value === 'function') {
        value = value(this);
      }
      return value;
    }
    return initializer.call(this);
  };
  descriptor.set = function (value) {
    this.customAttributes[name] = value;
    this.emit('didChange');
    return value;
  };
}

export default Theme;
