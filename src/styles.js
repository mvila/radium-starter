'use strict';

import upperFirst from 'lodash/upperFirst';

class Styles {
  constructor(theme) {
    const keys = [
      'primaryColor',
      'darkPrimaryColor',
      'lightPrimaryColor',
      'accentColor',
      'darkAccentColor',
      'backgroundColor',
      'bodyColor', // DEPRECATED
      'altBackgroundColor',
      'altBodyColor', // DEPRECATED
      'borderColor',
      'altBorderColor',
      'textColor',
      'primaryTextColor', // DEPRECATED
      'altTextColor',
      'secondaryTextColor', // DEPRECATED
      'mutedTextColor',
      'inverseTextColor',
      'inverseAltTextColor',
      'inverseMutedTextColor',
      'errorColor',
      'warningColor'
    ];
    for (const key of keys) {
      const value = theme[key];
      this[key] = {color: value};
      this['background' + upperFirst(key)] = {backgroundColor: value};
    }

    this.block = {display: 'block'};
    this.inline = {display: 'inline'};
    this.inlineBlock = {display: 'inline-block'};

    this.noMargins = {
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0
    };

    this.minimumLineHeight = {
      lineHeight: 1
    };

    this.regular = {
      fontWeight: 'normal'
    };

    this.bold = {
      fontWeight: 'bold'
    };

    this.italic = {
      fontStyle: 'italic'
    };

    this.mutedText = {
      color: theme.mutedTextColor
    };

    this.baseFontSize = {
      fontSize: theme.baseFontSize
    };

    this.smallFontSize = {
      fontSize: theme.smallFontSize
    };

    this.largeFontSize = {
      fontSize: theme.largeFontSize
    };

    this.border = {
      borderWidth: theme.borderWidth,
      borderStyle: 'solid',
      borderColor: theme.borderColor
    };

    this.topBorder = [
      {
        borderTopWidth: theme.borderWidth,
        borderTopStyle: 'solid',
        borderTopColor: theme.borderColor
      }
    ];

    this.rightBorder = {
      borderRightWidth: theme.borderWidth,
      borderRightStyle: 'solid',
      borderRightColor: theme.borderColor
    };

    this.bottomBorder = {
      borderBottomWidth: theme.borderWidth,
      borderBottomStyle: 'solid',
      borderBottomColor: theme.borderColor
    };

    this.leftBorder = {
      borderLeftWidth: theme.borderWidth,
      borderLeftStyle: 'solid',
      borderLeftColor: theme.borderColor
    };

    this.rounded = {
      borderRadius: theme.borderRadius
    };

    this.unstyledList = {
      paddingLeft: 0,
      listStyle: 'none'
    };

    this.showIf = function (condition) {
      return !condition ? {display: 'none'} : undefined;
    };

    this.hideIf = function (condition) {
      return this.showIf(!condition);
    };

    this.showIfSmall = {
      [`@media (min-width: ${theme.smallBreakpointPlusOne})`]: {
        display: 'none'
      }
    };

    this.hideIfSmall = {
      [`@media (max-width: ${theme.smallBreakpoint})`]: {
        display: 'none'
      }
    };

    this.showIfMedium = {
      [`@media (min-width: ${theme.mediumBreakpointPlusOne})`]: {
        display: 'none'
      }
    };

    this.hideIfMedium = {
      [`@media (max-width: ${theme.mediumBreakpoint})`]: {
        display: 'none'
      }
    };

    this.showIfLarge = {
      [`@media (min-width: ${theme.largeBreakpointPlusOne})`]: {
        display: 'none'
      }
    };

    this.hideIfLarge = {
      [`@media (max-width: ${theme.largeBreakpoint})`]: {
        display: 'none'
      }
    };
  }
}

export default Styles;
