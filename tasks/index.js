'use strict';

var gulp = require('gulp')
  , runSequence = require('run-sequence')
  , webserver = require('browser-sync')
  , async = require('async')
  , chokidar = require('chokidar');

require('./images');
require('./jade');
require('./scripts');
require('./misc');
require('./stylus');
require('./clean');

gulp.task('build', function (cb) {
  runSequence(
    'cleanBuild',
    ['stylusBuild',
      'jadeBuild',
      'jsBuild',
      'jsLibsBuild',
      'imagesBuild',
      'miscBuild'], cb);
});

gulp.task('watch:setWatchers', ['cleanWatch'], function (cb) {
  // css watcher
  var query = [];
  query.push(function (cb) {
    chokidar.watch('assets/static/css/**/*')
      .on('ready', function () {
        console.log('Stylesheets files watched');
        cb();
      })
      .on('all', function () {
        gulp.start('stylusWatch');
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
        gulp.start('jadeWatch');
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
        gulp.start('jsWatch');
        gulp.start('jsLibsWatch');
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
        gulp.start('imagesWatch');
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
        gulp.start('miscWatch');
      });
  });
  async.parallel(query, cb)
});

gulp.task('webserver', ['watch:setWatchers'], function () {
  return webserver({
    server: {
      baseDir: './site'
    }
  });
});

gulp.task('watch', ['webserver']);
