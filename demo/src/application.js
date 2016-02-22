'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import pick from 'lodash/pick';
import { RadiumStarter, Theme } from '../../src';
import Page from './page';

class Application {
  constructor() {
    this.name = 'radium-starter-demo';
    this.displayName = 'Radium Starter Demo';

    window.addEventListener('error', console.error, false);

    this.theme = new Theme();

    this.themes = {
      'default': pick(this.theme, [
        'bodyColor',
        'borderColor',
        'baseTextColor',
        'baseInverseTextColor'
      ]),

      'inverse': {
        bodyColor: '#000',
        borderColor: 'rgba(255,255,255,.3)',
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
      <RadiumStarter theme={this.theme}><Page app={this} /></RadiumStarter>,
      document.getElementById('root')
    );
  }
}

let app = new Application();

app.run();
