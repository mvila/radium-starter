'use strict';

import React from 'react';
import { StyleRoot, Style } from 'radium';
import Theme from './theme';
import Elements from './elements';
import Styles from './styles';

export class RadiumStarter extends React.Component {
  static propTypes = {
    theme: React.PropTypes.object,
    children: React.PropTypes.node.isRequired
  };

  static childContextTypes = {
    theme: React.PropTypes.object,
    styles: React.PropTypes.object
  };

  constructor(props) {
    super(props);
    this.theme = new Theme(this.props.theme);
    this.elements = new Elements(this.theme);
    this.styles = new Styles(this.theme);
  }

  getChildContext() {
    return { theme: this.theme, styles: this.styles };
  }

  render() {
    return (
      <StyleRoot>
        <Style rules={this.elements} />
        {this.props.children}
      </StyleRoot>
    );
  }
}

export { Form } from './components/form';
export { Input } from './components/input';
export { Button } from './components/button';

export default RadiumStarter;
