'use strict';

var gulp = require('gulp');

require('./clean');
require('./html');
require('./css');
require('./images');
require('./scripts');
require('./misc');

gulp.task('build', ['build:clean'], function () {
  gulp.start('build:html');
  gulp.start('build:css');
  gulp.start('build:images');
  gulp.start('build:js');
  gulp.start('build:jsLibs');
  gulp.start('build:misc');
});
