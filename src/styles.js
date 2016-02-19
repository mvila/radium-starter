'use strict';

import reduceCSSCalc from 'reduce-css-calc';

class Styles {
  constructor(vars) {
    this.primaryColor = { color: vars.$primaryColor };
    this.secondaryColor = { color: vars.$secondaryColor };

    this.darkGray = { color: vars.$darkGray };
    this.gray = { color: vars.$gray };
    this.lightGray = { color: vars.$lightGray };
    this.lighterGray = { color: vars.$lighterGray };
    this.lightestGray = { color: vars.$lightestGray };

    this.darkGrayBackground = { backgroundColor: vars.$darkGray };
    this.grayBackground = { backgroundColor: vars.$gray };
    this.lightGrayBackground = { backgroundColor: vars.$lightGray };
    this.lighterGrayBackground = { backgroundColor: vars.$lighterGray };
    this.lightestGrayBackground = { backgroundColor: vars.$lightestGray };

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
      color: vars.$mutedTextColor
    };

    this.border = {
      borderWidth: vars.$borderWidth,
      borderStyle: 'solid',
      borderColor: vars.$borderColor
    };

    this.topBorder = {
      borderTopWidth: vars.$borderWidth,
      borderTopStyle: 'solid',
      borderTopColor: vars.$borderColor
    };

    this.rightBorder = {
      borderRightWidth: vars.$borderWidth,
      borderRightStyle: 'solid',
      borderRightColor: vars.$borderColor
    };

    this.bottomBorder = {
      borderBottomWidth: vars.$borderWidth,
      borderBottomStyle: 'solid',
      borderBottomColor: vars.$borderColor
    };

    this.leftBorder = {
      borderLeftWidth: vars.$borderWidth,
      borderLeftStyle: 'solid',
      borderLeftColor: vars.$borderColor
    };

    this.rounded = {
      borderRadius: vars.$borderRadius
    };

    this.unstyledList = {
      paddingLeft: 0,
      listStyle: 'none'
    };

    this.hiddenIfSmall = {
      [`@media (max-width: ${vars.$smallBreakpoint})`]: {
        display: 'none'
      }
    };

    let smallPlusOne = reduceCSSCalc(`calc(${vars.$smallBreakpoint} + 1px)`);
    this.shownIfSmall = {
      [`@media (min-width: ${smallPlusOne})`]: {
        display: 'none'
      }
    };

    this.hiddenIfMedium = {
      [`@media (max-width: ${vars.$mediumBreakpoint})`]: {
        display: 'none'
      }
    };

    let mediumPlusOne = reduceCSSCalc(`calc(${vars.$mediumBreakpoint} + 1px)`);
    this.shownIfMedium = {
      [`@media (min-width: ${mediumPlusOne})`]: {
        display: 'none'
      }
    };

    this.hiddenIfLarge = {
      [`@media (max-width: ${vars.$largeBreakpoint})`]: {
        display: 'none'
      }
    };

    let largePlusOne = reduceCSSCalc(`calc(${vars.$largeBreakpoint} + 1px)`);
    this.shownIfLarge = {
      [`@media (min-width: ${largePlusOne})`]: {
        display: 'none'
      }
    };
  }
}

export default Styles;
