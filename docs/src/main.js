'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { RadiumStarterRoot } from '../../src';
import Page from './page';

let theme = {
  primaryColor: '#F44336',
  accentColor: '#448AFF'
};

ReactDOM.render(
  <RadiumStarterRoot theme={theme}>
    <Page />
  </RadiumStarterRoot>,
  document.getElementById('root')
);
