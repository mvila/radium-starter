'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Style, StyleRoot } from 'radium';
import s from './styles';
import Page from './page';

class Application {
  constructor() {
    this.name = 'radium-starter-demo';

    window.addEventListener('error', console.error, false);
  }

  async run() {
    this.renderStyles();
    this.renderPage();
  }

  renderStyles() {
    ReactDOM.render(
      <Style rules={s.elements} />,
      document.getElementById('styles')
    );
  }

  renderPage() {
    ReactDOM.render(
      <StyleRoot><Page /></StyleRoot>,
      document.getElementById('root')
    );
  }
}

let app = new Application();

app.run().catch(console.error);
