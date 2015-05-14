'use strict';

var gulp = require('gulp')
  , webserver = require('browser-sync')
  , async = require('async')
  , chokidar = require('chokidar');

require('./clean');
require('./html');
require('./css');
require('./images');
require('./scripts');
require('./misc');

gulp.task('dev:setWatchers', ['dev:clean'], function (cb) {
  // css watcher
  var query = [];
  query.push(function (cb) {
    chokidar.watch('assets/static/css/**/*')
      .on('ready', function () {
        console.log('Stylesheets files watched');
        cb();
      })
      .on('all', function () {
        gulp.start('dev:css');
      });
  });

  // html watcher
  query.push(function (cb) {
    chokidar.watch('assets/views/**/*')
      .on('ready', function () {
        console.log('HTML files watched');
        cb();
      })
      .on('all', function () {
        gulp.start('dev:html');
      });
  });
  // js watcher
  query.push(function (cb) {
    chokidar.watch('assets/static/js/**/*')
      .on('ready', function () {
        console.log('JavaScript files watched');
        cb();
      })
      .on('all', function () {
        gulp.start('dev:js');
        gulp.start('dev:jsLibs');
      });
  });
  // img watcher
  query.push(function (cb) {
    chokidar.watch('assets/static/img/**/*')
      .on('ready', function () {
        console.log('Image files watched');
        cb();
      })
      .on('all', function () {
        gulp.start('dev:images');
      });
  });
  // misc watcher
  query.push(function (cb) {
    chokidar.watch('assets/static/misc/**/*')
      .on('ready', function () {
        console.log('Misc files watched');
        cb();
      })
      .on('all', function () {
        gulp.start('dev:misc');
      });
  });
  async.parallel(query, cb)
});

gulp.task('webserver', ['dev:setWatchers'], function () {
  return webserver({
    server: {
      baseDir: './site'
    }
  });
});

gulp.task('dev', ['webserver']);
