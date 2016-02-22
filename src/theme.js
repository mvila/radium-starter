'use strict';

import Color from 'color';

export class Theme {
  constructor(customAttributes = {}) {
    for (let key of Object.keys(customAttributes)) {
      let value = customAttributes[key];
      Object.defineProperty(this, key, { value });
    }
  }

  // --- Base colors ---

  @def primaryColor = '#2196F3'; // Material Design Blue 500
  @def accentColor = '#FF5252'; // Material Design Red A200
  @def bodyColor = '#FFF';
  @def borderColor = 'rgba(0,0,0,.12)';

  @def darkPrimaryColor = Color(this.primaryColor).darken(0.3).rgbString();
  @def lightPrimaryColor = Color(this.primaryColor).lighten(0.6).rgbString();
  @def darkAccentColor = Color(this.accentColor).darken(0.4).rgbString();
  @def altBodyColor = Color(this.bodyColor).darken(0.03).rgbString();
  @def altBorderColor = Color(this.borderColor).opaquer(0.3).rgbString();

  @def primaryTextColor = 'rgba(0,0,0,.87)';
  @def secondaryTextColor = 'rgba(0,0,0,.54)';
  @def mutedTextColor = 'rgba(0,0,0,.38)';

  @def inversePrimaryTextColor = 'rgba(255,255,255,1)';
  @def inverseSecondaryTextColor = 'rgba(255,255,255,0.7)';
  @def inverseMutedTextColor = 'rgba(255,255,255,0.5)';

  @def errorColor = '#F44336'; // Material Design Red 500
  @def warningColor = '#FF9800'; // Material Design Orange 500

  // --- Links ---

  @def linkColor = this.accentColor;
  @def linkDecoration = 'none';
  @def linkHoverColor = this.darkAccentColor;
  @def linkHoverDecoration = 'underline';

  // --- Typography ---

  @def sansSerifFontFamily = '-apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\', Arial, sans-serif';
  @def serifFontFamily = 'Georgia, \'Times New Roman\', Times, serif';
  @def monospaceFontFamily = 'Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace';

  @def rootFontSize = '16px';
  @def baseFontFamily = this.sansSerifFontFamily;
  @def baseFontSize = '1rem';
  @def baseLineHeight = 1.5;

  @def smallFontSize = '.875rem';
  @def largeFontSize = '1.25rem';

  // --- Borders ---

  @def borderWidth = '1px';
  @def borderRadius = '.25rem';

  @def smallBorderRadius = '.2rem';
  @def largeBorderRadius = '.3rem';

  // --- Headings ---

  @def headingsMarginBottom = '.5rem';
  @def headingsFontFamily = 'inherit';
  @def headingsFontWeight = 'bold';
  @def headingsLineHeight = 1.25; // was 1.1 in Bootstrap 4
  @def headingsColor = 'inherit';

  @def h1FontSize = '2.5rem';
  @def h2FontSize = '2rem';
  @def h3FontSize = '1.75rem';
  @def h4FontSize = '1.5rem';
  @def h5FontSize = '1.25rem';
  @def h6FontSize = '1rem';

  // --- Tables ---

  @def tableBackgroundColor = 'transparent';
  @def tableCellPadding = '.75rem';

  // --- Code ---

  @def codeColor = this.darkPrimaryColor;
  @def codeBackgroundColor = this.altBodyColor;
  @def preColor = this.secondaryTextColor;

  // --- Buttons ---

  @def buttonFontWeight = 'normal';
  @def buttonLineHeight = 1.25;

  @def buttonXPadding = '1rem';
  @def buttonYPadding = '.5rem';

  @def smallButtonXPadding = '.5rem';
  @def smallButtonYPadding = '.25rem';

  @def largeButtonXPadding = '1.5rem';
  @def largeButtonYPadding = '.75rem';

  @def buttonTextColor = this.primaryTextColor;
  @def buttonBackgroundColor = this.bodyColor;
  @def buttonBorderColor = this.borderColor;
  @def activeButtonBackgroundColor = this.altBodyColor;
  @def activeButtonBorderColor = this.altBorderColor;

  @def primaryButtonTextColor = this.inversePrimaryTextColor;
  @def primaryButtonBackgroundColor = this.primaryColor;
  @def primaryButtonBorderColor = this.primaryButtonBackgroundColor;
  @def activePrimaryButtonBackgroundColor = this.darkPrimaryColor;
  @def activePrimaryButtonBorderColor = this.activePrimaryButtonBackgroundColor;

  @def accentButtonTextColor = this.inversePrimaryTextColor;
  @def accentButtonBackgroundColor = this.accentColor;
  @def accentButtonBorderColor = this.accentButtonBackgroundColor;
  @def activeAccentButtonBackgroundColor = this.darkAccentColor;
  @def activeAccentButtonBorderColor = this.activeAccentButtonBackgroundColor;

  @def buttonBoxShadow = 'inset 0 1px 0 rgba(255,255,255,.15), 0 1px 1px rgba(0,0,0,.075)';
  @def activeButtonBoxShadow = `inset 0 3px 5px ${this.buttonBorderColor}`;

  // --- Inputs ---

  @def inputLineHeight = 1.25;
  @def inputTextColor = this.primaryTextColor;
  @def inputBackgroundColor = this.bodyColor;
  @def inputBorderWidth = this.borderWidth;
  @def inputBorderColor = this.borderColor;
  @def inputBoxShadow = `inset 0 1px 1px ${Color(this.inputBorderColor).clearer(0.4).rgbString()}`;
  @def inputPlaceholderColor = this.mutedTextColor;

  @def focusedInputBorderColor = this.primaryColor;
  @def focusedInputBoxShadowColor = Color(this.focusedInputBorderColor).clearer(0.4).rgbString();

  @def disabledInputBackgroundColor = this.altBodyColor;

  @def inputXPadding = '.625rem'; // was '.75rem' in Bootstrap 4
  @def inputYPadding = '.5rem';

  @def smallInputXPadding = '.375rem'; // was '.5rem' in Bootstrap 4
  @def smallInputYPadding = '.25rem';

  @def largeInputXPadding = '.875rem'; // was '1.5rem' in Bootstrap 4
  @def largeInputYPadding = '.75rem';

  // --- Other ---

  @def disabledCursor = 'not-allowed';

  // --- Breakpoints ---

  @def smallBreakpoint = '640px';
  @def mediumBreakpoint = '1024px';
  @def largeBreakpoint = '1440px';
}

function def(target, name, descriptor) {
  let initializer = descriptor.initializer;
  delete descriptor.initializer;
  delete descriptor.writable;
  descriptor.get = function() {
    return initializer.call(this);
  };
}

export default Theme;
