import fs from 'fs';
import pathModule from 'path';
import pick from 'lodash/pick';
import mkdirp from 'mkdirp';
import rimraf from 'rimraf';
import watch from 'node-watch';
import denodeify from 'denodeify';
import ncpModule from 'ncp';
const ncp = denodeify(ncpModule.ncp);
import UglifyJS from 'uglify-js';
import browserify from 'browserify';
import watchify from 'watchify';
import babelify from 'babelify';

export class Builder {
  constructor(options = {}) {
    Object.assign(
      this,
      pick(options, [
        'sourceDir',
        'targetDir',
        'htmlIndexFilenames',
        'staticFilePaths',
        'scriptsDirname',
        'appScriptFilename',
        'browserifiedAppScriptFilename',
        'injectedContent',
        'watchMode'
      ])
    );
  }

  async build() {
    await this.cleanAll();
    await this.buildAll();
    if (this.watchMode) {
      await this.watchAll();
    }
  }

  async copyStaticFiles() {
    const outputDir = this.targetDir;
    for (let i = 0; i < this.staticFilePaths.length; i++) {
      const path = this.staticFilePaths[i];
      let srcPth;
      let dstPth;
      if (typeof path === 'object') {
        srcPth = path.src;
        dstPth = path.dst;
      } else {
        srcPth = path;
        dstPth = path;
      }
      const inputPath = pathModule.join(this.sourceDir, srcPth);
      const outputPath = pathModule.join(outputDir, dstPth);
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
    const filePaths = this.staticFilePaths.map(path => {
      if (typeof path === 'object') {
        path = path.src;
      }
      return pathModule.join(this.sourceDir, path);
    });
    watch(filePaths, async () => {
      try {
        await this.copyStaticFiles();
      } catch (err) {
        console.error(err);
      }
    });
  }

  async browserifyAppScript() {
    const inputDir = this.sourceDir;
    const inputPath = pathModule.join(inputDir, this.appScriptFilename);
    const opts = this.watchMode ? watchify.args : {};
    let bro = browserify(opts);
    bro.transform(babelify, {
      presets: ['es2015', 'react'],
      plugins: ['transform-decorators-legacy', 'transform-class-properties']
    });
    bro.require(inputPath, {entry: true});
    if (this.watchMode) {
      bro = watchify(bro);
    }
    const originalBundle = bro.bundle;
    function _bundle() {
      return new Promise((resolve, reject) => {
        originalBundle.call(bro, (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        });
      });
    }
    const bundle = async function () {
      let output = await _bundle();
      output = output.toString();
      output = UglifyJS.minify(output).code;
      const outputDir = pathModule.join(this.targetDir, this.scriptsDirname || '');
      const outputPath = pathModule.join(outputDir, this.browserifiedAppScriptFilename);
      fs.writeFileSync(outputPath, output);
      console.log('browserifyAppScript: done');
    }.bind(this);
    if (this.watchMode) {
      bro.on('update', async () => {
        try {
          await bundle();
          await this.copyHTMLIndexFiles();
        } catch (err) {
          console.error(err);
        }
      });
    }
    await bundle();
  }

  async copyHTMLIndexFiles() {
    for (const filename of this.htmlIndexFilenames) {
      const inputDir = this.sourceDir;
      const inputPath = pathModule.join(inputDir, filename);
      let html = fs.readFileSync(inputPath, 'utf8');

      let injectedContent = this.injectedContent;
      if (injectedContent) {
        injectedContent = injectedContent.replace(/'/g, '\\\'');
        injectedContent = injectedContent.replace(/\n/g, '\\n');
        html = html.replace(/\{injectedContent\}/g, injectedContent);
      }

      let outputDir = this.targetDir;
      const outputPath = pathModule.join(outputDir, filename);
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
