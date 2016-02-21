'use strict';

let pathModule = require('path');
import Builder from './builder';
import Server from './server';

class Application {
  constructor() {
    this.name = 'radium-starter-demo-server';
    this.environment = 'development';
    this.port = 12345;
  }

  run() {
    this.build({ watch: true });
    this.start();
  }

  build(options = {}) {
    let builder = new Builder(this, {
      sourceDir: pathModule.join(__dirname, 'src'),
      targetDir: pathModule.join(__dirname, 'dist'),

      vendorDirname: 'vendor',

      stylesDirname: undefined, // 'styles'
      sassFilename: undefined,
      sassDependencyFilenames: [],
      vendorCSSPaths: [],
      cssFilename: 'index.css',

      htmlIndexFilenames: ['index.html'],

      staticFilePaths: [],

      inputStylesDirname: undefined, // 'scripts'
      outputStylesDirname: undefined, // 'scripts'

      vendorScriptPaths: [],
      vendorScriptFilename: 'vendor.js',

      appScriptFilename: 'index.js',
      browserifiedAppScriptFilename: 'index.js',

      watchMode: options.watch
    });

    builder.build().catch(console.error);
  }

  start() {
    let server = new Server(this, {
      port: this.port,
      path: pathModule.join(__dirname, 'dist')
    });

    server.start();
  }
}

let app = new Application();

app.run();
