'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

@Radium
export class RadiumStarterConsumer extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  };

  static contextTypes = {
    theme: PropTypes.object.isRequired,
    styles: PropTypes.object.isRequired
  };

  render() {
    return this.props.children(this.context.theme, this.context.styles);
  }
}

export default RadiumStarterConsumer;
