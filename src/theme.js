'use strict';

import EventEmitterMixin from 'event-emitter-mixin';
import Color from 'color';

export class Theme extends EventEmitterMixin() {
  constructor(customAttributes = {}) {
    super();
    if (typeof customAttributes === 'function') {
      customAttributes = customAttributes(this);
    }
    this.customAttributes = customAttributes;
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

  @def baseTextColor = '#000';
  @def primaryTextColor = Color(this.baseTextColor).alpha(0.87).rgbString();
  @def secondaryTextColor = Color(this.baseTextColor).alpha(0.54).rgbString();
  @def mutedTextColor = Color(this.baseTextColor).alpha(0.38).rgbString();

  @def baseInverseTextColor = '#FFF';
  @def inversePrimaryTextColor = Color(this.baseInverseTextColor).alpha(1).rgbString();
  @def inverseSecondaryTextColor = Color(this.baseInverseTextColor).alpha(0.7).rgbString();
  @def inverseMutedTextColor = Color(this.baseInverseTextColor).alpha(0.5).rgbString();;

  @def errorColor = '#F44336'; // Material Design Red 500
  @def warningColor = '#FF9800'; // Material Design Orange 500

  // --- Links ---

  @def linkColor = this.accentColor;
  @def linkDecoration = 'none';
  @def hoveredLinkColor = this.darkAccentColor;
  @def hoveredLinkDecoration = 'underline';

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

  @def inputLineHeight = 1.25;
  @def inputTextColor = this.primaryTextColor;
  @def inputBackgroundColor = this.bodyColor;
  @def inputBorderWidth = this.borderWidth;
  @def inputBorderColor = this.borderColor;
  @def inputPlaceholderColor = this.mutedTextColor;

  @def focusedInputBorderColor = this.primaryColor;

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
    if (this.customAttributes && this.customAttributes.hasOwnProperty(name)) {
      let value = this.customAttributes[name];
      if (typeof value === 'function') value = value(this);
      return value;
    } else {
      return initializer.call(this);
    }
  };
  descriptor.set = function(value) {
    this.customAttributes[name] = value;
    this.emit('didChange');
    return value;
  };
}

export default Theme;
