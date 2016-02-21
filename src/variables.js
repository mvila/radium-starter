'use strict';

import Color from 'color';
import reduceCSSCalc from 'reduce-css-calc';

export class Variables {
  constructor(customVars = {}) {
    for (let key of Object.keys(customVars)) {
      let value = customVars[key];
      Object.defineProperty(this, key, { value });
    }
  }

  keys() {
    return Object.keys(Variables.prototype);
  }

  // --- Colors ---

  @def $blue = '#0275D8';
  @def $red = '#CB3837';

  @def $primaryColor = this.$blue;
  @def $secondaryColor = this.$red;

  @def $darkGray = '#373A3C';
  @def $gray = '#55595C';
  @def $lightGray = '#818A91';
  @def $lighterGray = '#ECEEEF';
  @def $lightestGray = '#F7F7F9';

  @def $bodyColor = '#373A3C';
  @def $bodyBackgroundColor = '#FFF';

  @def $errorColor = this.$red;
  @def $warningColor = '#F0AD4E'; // orange

  @def $mutedTextColor = this.$lightGray;

  // --- Links ---

  @def $linkColor = this.$primaryColor;
  @def $linkDecoration = 'none';
  @def $linkHoverColor = Color(this.$primaryColor).darken(0.4).hexString();
  @def $linkHoverDecoration = 'underline';

  // --- Typography ---

  @def $sansSerifFontFamily = '-apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\', Arial, sans-serif';
  @def $serifFontFamily = 'Georgia, \'Times New Roman\', Times, serif';
  @def $monospaceFontFamily = 'Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace';

  @def $rootFontSize = '16px';
  @def $baseFontFamily = this.$sansSerifFontFamily;
  @def $baseFontSize = '1rem';
  @def $baseLineHeight = 1.5;

  @def $smallFontSize = '.875rem';
  @def $largeFontSize = '1.25rem';

  // --- Borders ---

  @def $borderWidth = '1px';
  @def $borderRadius = '.25rem';
  @def $borderColor = 'rgba(0,0,0,.1)';

  @def $smallBorderRadius = '.2rem';
  @def $largeBorderRadius = '.3rem';

  // --- Spacing ---

  @def $spacer = '1rem';

  // --- Headings ---

  @def $headingsMarginBottom = reduceCSSCalc(`calc(${this.$spacer} / 2)`);
  @def $headingsFontFamily = 'inherit';
  @def $headingsFontWeight = 'bold';
  @def $headingsLineHeight = 1.25; // was 1.1 in Bootstrap 4
  @def $headingsColor = 'inherit';

  @def $h1FontSize = '2.5rem';
  @def $h2FontSize = '2rem';
  @def $h3FontSize = '1.75rem';
  @def $h4FontSize = '1.5rem';
  @def $h5FontSize = '1.25rem';
  @def $h6FontSize = '1rem';

  // --- Tables ---

  @def $tableBackgroundColor = 'transparent';
  @def $tableCellPadding = '.75rem';

  // --- Code ---

  @def $codeColor = this.$secondaryColor;
  @def $codeBackgroundColor = '#F7F7F9';
  @def $preColor = this.$darkGray;

  // --- Buttons ---

  @def $buttonFontWeight = 'normal';
  @def $buttonLineHeight = 1.25;
  @def $buttonBoxShadow = 'inset 0 1px 0 rgba(255,255,255,.15), 0 1px 1px rgba(0,0,0,.075)';

  @def $activeButtonBoxShadow = 'inset 0 3px 5px rgba(0,0,0,.125)';

  @def $buttonXPadding = '1rem';
  @def $buttonYPadding = '.5rem';

  @def $smallButtonXPadding = '.5rem';
  @def $smallButtonYPadding = '.25rem';

  @def $largeButtonXPadding = '1.5rem';
  @def $largeButtonYPadding = '.75rem';

  @def $buttonColor = this.$darkGray;
  @def $buttonBackgroundColor = '#FFF';
  @def $buttonBorderColor = '#CCC';

  @def $buttonPrimaryColor = '#FFF';
  @def $buttonPrimaryBackgroundColor = this.$primaryColor;
  @def $buttonPrimaryBorderColor = this.$buttonPrimaryBackgroundColor;

  @def $buttonSecondaryColor = '#FFF';
  @def $buttonSecondaryBackgroundColor = this.$secondaryColor;
  @def $buttonSecondaryBorderColor = this.$buttonSecondaryBackgroundColor;

  // --- Forms ---

  @def $inputLineHeight = 1.25;
  @def $inputColor = this.$gray;
  @def $inputBackgroundColor = '#FFF';
  @def $inputBorderColor = 'rgba(0,0,0,.15)';
  @def $inputBoxShadow = 'inset 0 1px 1px rgba(0,0,0,.075)';
  @def $inputPlaceholderColor = '#999';

  @def $focusedInputBorderColor = '#66AFE9';
  @def $focusedInputBoxShadowColor = 'rgba(102,175,233,.6)';

  @def $disabledInputBackgroundColor = this.$lightestGray; // was lighterGray in Bootstrap 4

  @def $inputXPadding = '.625rem'; // was '.75rem' in Bootstrap 4
  @def $inputYPadding = '.5rem';

  @def $smallInputXPadding = '.375rem'; // was '.5rem' in Bootstrap 4
  @def $smallInputYPadding = '.25rem';

  @def $largeInputXPadding = '.875rem'; // was '1.5rem' in Bootstrap 4
  @def $largeInputYPadding = '.75rem';

  // --- Other ---

  @def $disabledCursor = 'not-allowed';

  // --- Breakpoints ---

  @def $smallBreakpoint = '640px';
  @def $mediumBreakpoint = '1024px';
  @def $largeBreakpoint = '1440px';
}

function def(target, name, descriptor) {
  let initializer = descriptor.initializer;
  delete descriptor.initializer;
  delete descriptor.writable;
  descriptor.get = function() {
    return initializer.call(this);
  };
}

export default Variables;
