'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { RadiumStarterRoot } from '../../src';
import Page from './page';

let theme = {
  primaryColor: '#F44336',
  accentColor: '#448AFF',
  h2FontSize: t => t.h4FontSize,
  h3FontSize: t => t.h5FontSize
};

ReactDOM.render(
  <RadiumStarterRoot theme={theme}>
    <Page />
  </RadiumStarterRoot>,
  document.getElementById('root')
);
