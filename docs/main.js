'use strict';

import fs from 'fs';
import pathModule from 'path';
import Remarkable from 'remarkable';
import Prism from 'prismjs';
import Builder from '../builder';

const path = pathModule.join(__dirname, '..', 'README.md');
let markdown = fs.readFileSync(path, 'utf8');
const pattern = '<!-- contentBegin -->\n';
let index = markdown.indexOf(pattern);
markdown = markdown.substr(index + pattern.length);
index = markdown.indexOf('<!-- contentEnd -->');
markdown = markdown.substr(0, index);

const remarkable = new Remarkable({
  highlight(str) {
    return Prism.highlight(str, Prism.languages.javascript);
  }
});

const injectedContent = remarkable.render(markdown);

const builder = new Builder({
  sourceDir: pathModule.join(__dirname, 'src'),
  targetDir: pathModule.join(__dirname, 'dist'),
  htmlIndexFilenames: ['index.html'],
  staticFilePaths: ['images'],
  appScriptFilename: 'index.js',
  browserifiedAppScriptFilename: 'index.js',
  injectedContent
});

builder.build().catch(console.error);
