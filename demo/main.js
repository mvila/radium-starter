'use strict';

import pathModule from 'path';
import Builder from '../builder';

const builder = new Builder({
  sourceDir: pathModule.join(__dirname, 'src'),
  targetDir: pathModule.join(__dirname, 'dist'),
  htmlIndexFilenames: ['index.html'],
  staticFilePaths: [],
  appScriptFilename: 'index.js',
  browserifiedAppScriptFilename: 'index.js'
});

builder.build().catch(console.error);
