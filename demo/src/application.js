'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import pick from 'lodash/pick';
import {RadiumStarterRoot, Theme} from '../../src';
import Page from './page';
import pkg from '../../package.json';

class Application {
  constructor() {
    this.name = 'radium-starter-demo';
    this.displayName = 'Radium Starter Demo';
    this.version = pkg.version;

    this.theme = new Theme();

    this.themes = {
      default: pick(this.theme, [
        'backgroundColor',
        'inverseBackgroundColor',
        'borderColor',
        'inverseBorderColor',
        'baseTextColor',
        'baseInverseTextColor'
      ]),

      inverse: {
        backgroundColor: '#000',
        inverseBackgroundColor: '#FFF',
        borderColor: 'rgba(255,255,255,.3)',
        inverseBorderColor: 'rgba(0,0,0,.12)',
        baseTextColor: '#FFF',
        baseInverseTextColor: '#000'
      }
    };

    this.themeName = 'default';
  }

  switchTheme(name) {
    Object.assign(this.theme, this.themes[name]);
    this.themeName = name;
  }

  run() {
    ReactDOM.render(
      <RadiumStarterRoot theme={this.theme}>
        <Page app={this} />
      </RadiumStarterRoot>,
      document.getElementById('root')
    );
  }
}

const app = new Application();

app.run();
