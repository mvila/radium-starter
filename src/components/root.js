'use strict';

import React from 'react';
import { StyleRoot, Style } from 'radium';
import clone from 'lodash/clone';
import mergeWith from 'lodash/mergeWith';
import debounce from 'lodash/debounce';
import Theme from '../theme';
import Elements from '../elements';
import Styles from '../styles';

export class RadiumStarterRoot extends React.Component {
  static propTypes = {
    theme: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.func
    ]),
    styles: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.func
    ]),
    children: React.PropTypes.node.isRequired
  };

  static childContextTypes = {
    theme: React.PropTypes.object,
    styles: React.PropTypes.object
  };

  getChildContext() {
    return { theme: this.state.theme, styles: this.styles };
  }

  constructor(props) {
    super(props);

    let theme;
    if (this.props.theme instanceof Theme) {
      theme = this.props.theme;
    } else {
      theme = new Theme(this.props.theme);
    }
    this.state = { theme };

    this.updateComputedState();
  }

  componentDidMount() {
    this.themeDidChange = debounce(() => {
      this.updateComputedState();
      this.forceUpdate();
    }, 50);

    this.state.theme.on('didChange', this.themeDidChange);
  }

  componentWillUnmount() {
    this.state.theme.off('didChange', this.themeDidChange);
  }

  updateComputedState() {
    this.elements = new Elements(this.state.theme);
    console.log(this.elements.small);

    this.styles = new Styles(this.state.theme);
    if (this.props.styles) {
      let customStyles = this.props.styles;
      if (typeof customStyles === 'function') {
        customStyles = customStyles(this.state.theme, this.styles);
      } else {
        customStyles = clone(customStyles);
      }
      for (let key of Object.keys(customStyles)) {
        let value = customStyles[key];
        if (typeof value === 'function') {
          customStyles[key] = value(this.state.theme, this.styles);
        }
      }
      mergeWith(this.styles, customStyles, (objValue, srcValue) => {
        let objValueIsArray = Array.isArray(objValue);
        let srcValueIsArray = Array.isArray(srcValue);
        if (objValueIsArray || srcValueIsArray) {
          if (!objValueIsArray) objValue = [objValue];
          if (!srcValueIsArray) srcValue = [srcValue];
          return objValue.concat(srcValue);
        } else {
          return undefined;
        }
      });
    }
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

export default RadiumStarterRoot;
