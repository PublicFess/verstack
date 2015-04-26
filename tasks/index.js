'use strict';

var gulp = require('gulp')
  , runSequence = require('run-sequence');

require('./images');
require('./jade');
require('./scripts');
require('./misc');
require('./stylus');
require('./clean');
require('./webserver');

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

gulp.task('watch', function (cb) {
  runSequence(
    'cleanWatch',
    ['stylusWatch',
      'jadeWatch',
      'jsWatch',
      'jsLibsWatch',
      'imagesWatch',
      'miscWatch'],
    'webserver', function() {
      gulp.watch('assets/static/css/**/*.styl', ['stylusWatch']);
      gulp.watch('assets/views/**/*.jade', ['jadeWatch']);
      gulp.watch('assets/static/js/**/*', ['jsWatch']);
      gulp.watch('assets/static/js/libs/*', ['jsLibsWatch']);
      gulp.watch('assets/static/img/**/*', ['imagesWatch']);
      gulp.watch('assets/static/misc/**/*', ['miscWatch']);
    });
});
