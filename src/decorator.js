'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

export function withRadiumStarter(WrappedComponent) {
  WrappedComponent = Radium(WrappedComponent);

  return class RadiumStarterHOC extends React.Component {
    static contextTypes = {
      theme: PropTypes.object.isRequired,
      styles: PropTypes.object.isRequired
    };

    render() {
      const props = {...this.props, theme: this.context.theme, styles: this.context.styles};
      return <WrappedComponent {...props} />;
    }
  };
}

// DEPRECATED
export function Decorator(component, radiumConfig) {
  if (typeof component !== 'function') {
    radiumConfig = component;
    return function (component) {
      return Decorator(component, radiumConfig);
    };
  }

  if (!component.contextTypes) {
    component.contextTypes = {};
  }
  component.contextTypes.theme = PropTypes.object.isRequired;
  component.contextTypes.styles = PropTypes.object.isRequired;

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
