'use strict';

import fs from 'fs';
import pathModule from 'path';
import pick from 'lodash/pick';
import mkdirp from 'mkdirp';
import rimraf from 'rimraf';
import watch from 'node-watch';
import denodeify from 'denodeify';
import ncpModule from 'ncp';
let ncp = denodeify(ncpModule.ncp);
import UglifyJS from 'uglify-js';
import browserify from 'browserify';
import watchify from 'watchify';
import babelify from 'babelify';

export class Builder {
  constructor(options = {}) {
    Object.assign(this, pick(options, [
      'sourceDir',
      'targetDir',
      'htmlIndexFilenames',
      'staticFilePaths',
      'scriptsDirname',
      'appScriptFilename',
      'browserifiedAppScriptFilename',
      'injectedContent',
      'watchMode'
    ]));
  }

  async build() {
    await this.cleanAll();
    await this.buildAll();
    if (this.watchMode) await this.watchAll();
  }

  async copyStaticFiles() {
    let outputDir = this.targetDir;
    for (let i = 0; i < this.staticFilePaths.length; i++) {
      let path = this.staticFilePaths[i];
      let srcPth, dstPth;
      if (typeof path === 'object') {
        srcPth = path.src;
        dstPth = path.dst;
      } else {
        srcPth = dstPth = path;
      }
      let inputPath = pathModule.join(this.sourceDir, srcPth);
      let outputPath = pathModule.join(outputDir, dstPth);
      await ncp(inputPath, outputPath, {
        stopOnErr: true,
        filter(pth) {
          return !/\.DS_Store$/.test(pth);
        },
        transform: (read, write) => {
          read.pipe(write);
        }
      });
    }
    console.log('copyStaticFiles: done');
  }

  async watchStaticFiles() {
    let filePaths = this.staticFilePaths.map(path => {
      if (typeof path === 'object') path = path.src;
      return pathModule.join(this.sourceDir, path);
    });
    watch(filePaths, async function() {
      try {
        await this.copyStaticFiles();
      } catch (err) {
        console.error(err);
      }
    }.bind(this));
  }

  async browserifyAppScript() {
    let inputDir = this.sourceDir;
    let inputPath = pathModule.join(inputDir, this.appScriptFilename);
    let opts = this.watchMode ? watchify.args : {};
    let bro = browserify(opts);
    bro.transform(babelify, {
      presets: ['es2015', 'react'],
      plugins: ['transform-decorators-legacy', 'transform-class-properties']
    });
    bro.require(inputPath, { entry: true });
    if (this.watchMode) bro = watchify(bro);
    let originalBundle = bro.bundle;
    function _bundle() {
      return new Promise(function(resolve, reject) {
        originalBundle.call(bro, function(err, res) {
          if (err) reject(err); else resolve(res);
        });
      });
    }
    let bundle = async function() {
      let output = await _bundle();
      output = (UglifyJS.minify(output.toString(), { fromString: true })).code;
      let outputDir = pathModule.join(this.targetDir, this.scriptsDirname || '');
      let outputPath = pathModule.join(outputDir, this.browserifiedAppScriptFilename);
      fs.writeFileSync(outputPath, output);
      console.log('browserifyAppScript: done');
    }.bind(this);
    if (this.watchMode) {
      bro.on('update', async function() {
        try {
          await bundle();
          await this.copyHTMLIndexFiles();
        } catch (err) {
          console.error(err);
        }
      }.bind(this));
    }
    await bundle();
  }

  async copyHTMLIndexFiles() {
    for (let filename of this.htmlIndexFilenames) {
      let inputDir = this.sourceDir;
      let inputPath = pathModule.join(inputDir, filename);
      let html = fs.readFileSync(inputPath, 'utf8');

      let injectedContent = this.injectedContent;
      if (injectedContent) {
        injectedContent = injectedContent.replace(/'/g, '\\\'');
        injectedContent = injectedContent.replace(/\n/g, '\\n');
        html = html.replace(/\{injectedContent\}/g, injectedContent);
      }
      
      let outputDir = this.targetDir;
      let outputPath = pathModule.join(outputDir, filename);
      outputDir = pathModule.dirname(outputPath);
      mkdirp.sync(outputDir);
      fs.writeFileSync(outputPath, html);
    }
    console.log('copyHTMLIndexFiles: done');
  }

  async cleanAll() {
    rimraf.sync(this.targetDir);
  }

  async buildAll() {
    mkdirp.sync(this.targetDir);
    await this.copyStaticFiles();
    await this.browserifyAppScript();
    await this.copyHTMLIndexFiles();
  }

  async watchAll() {
    await this.watchStaticFiles();
  }
}

export default Builder;
