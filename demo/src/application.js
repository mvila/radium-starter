'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import RadiumStarter from '../../src';
import Page from './page';

class Application {
  constructor() {
    this.name = 'radium-starter-demo';

    window.addEventListener('error', console.error, false);
  }

  run() {
    ReactDOM.render(
      <RadiumStarter><Page /></RadiumStarter>,
      document.getElementById('root')
    );
  }
}

let app = new Application();

app.run();
