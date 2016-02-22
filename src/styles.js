'use strict';

import upperFirst from 'lodash/upperFirst';
import reduceCSSCalc from 'reduce-css-calc';

class Styles {
  constructor(theme) {
    let keys = [
      'primaryColor',
      'darkPrimaryColor',
      'lightPrimaryColor',
      'accentColor',
      'darkAccentColor',
      'bodyColor',
      'altBodyColor',
      'borderColor',
      'altBorderColor',
      'primaryTextColor',
      'secondaryTextColor',
      'mutedTextColor',
      'inversePrimaryTextColor',
      'inverseSecondaryTextColor',
      'inverseMutedTextColor',
      'errorColor',
      'warningColor'
    ];
    for (let key of keys) {
      let value = theme[key];
      this[key] = { color: value };
      this['background' + upperFirst(key)] = { backgroundColor: value };
    }

    this.block = { display: 'block' };
    this.inline = { display: 'inline' };
    this.inlineBlock = { display: 'inline-block' };

    this.noMargins = {
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0
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

    this.border = {
      borderWidth: theme.borderWidth,
      borderStyle: 'solid',
      borderColor: theme.borderColor
    };

    this.topBorder = [{
      borderTopWidth: theme.borderWidth,
      borderTopStyle: 'solid',
      borderTopColor: theme.borderColor
    }];

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

    this.hiddenIfSmall = {
      [`@media (max-width: ${theme.smallBreakpoint})`]: {
        display: 'none'
      }
    };

    let smallPlusOne = reduceCSSCalc(`calc(${theme.smallBreakpoint} + 1px)`);
    this.shownIfSmall = {
      [`@media (min-width: ${smallPlusOne})`]: {
        display: 'none'
      }
    };

    this.hiddenIfMedium = {
      [`@media (max-width: ${theme.mediumBreakpoint})`]: {
        display: 'none'
      }
    };

    let mediumPlusOne = reduceCSSCalc(`calc(${theme.mediumBreakpoint} + 1px)`);
    this.shownIfMedium = {
      [`@media (min-width: ${mediumPlusOne})`]: {
        display: 'none'
      }
    };

    this.hiddenIfLarge = {
      [`@media (max-width: ${theme.largeBreakpoint})`]: {
        display: 'none'
      }
    };

    let largePlusOne = reduceCSSCalc(`calc(${theme.largeBreakpoint} + 1px)`);
    this.shownIfLarge = {
      [`@media (min-width: ${largePlusOne})`]: {
        display: 'none'
      }
    };
  }
}

export default Styles;
