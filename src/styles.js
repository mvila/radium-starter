'use strict';

import reduceCSSCalc from 'reduce-css-calc';

class Styles {
  constructor(vars) {
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

    this.bordered = {
      borderWidth: vars.$borderWidth,
      borderStyle: 'solid',
      borderColor: vars.$borderColor
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
