'use strict';

import React from 'react';
import Radium from 'radium';

export function Decorator(component, radiumConfig) {
  if (typeof component !== 'function') {
    radiumConfig = component;
    return function(component) {
      return Decorator(component, radiumConfig);
    };
  }

  if (!component.contextTypes) component.contextTypes = {};
  component.contextTypes.theme = React.PropTypes.object.isRequired;
  component.contextTypes.styles = React.PropTypes.object.isRequired;

  component.prototype.Radium = Radium;

  Object.defineProperty(component.prototype, 'theme', {
    get() {
      return this.context.theme;
    }
  });

  Object.defineProperty(component.prototype, 'styles', {
    get() {
      return this.context.styles;
    }
  });

  return Radium(radiumConfig)(component);
}

export default Decorator;
