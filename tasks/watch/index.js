'use strict';

var gulp = require('gulp')
  , runSequence = require('run-sequence');

require('./imagesWatch')();
require('./jadeWatch')();
require('./jsWatch')();
require('./miscWatch')();
require('./stylusWatch')();
require('./cleanWatch')();
require('./webserver')();

module.exports = function () {
  gulp.task('watch', function (cb) {
    runSequence(
      'cleanWatch',
      'stylusWatch',
      'jadeWatch',
      'jsWatch',
      'imagesWatch',
      'miscWatch',
      'webserver', function() {
        gulp.watch('assets/static/css/**/*.styl', ['stylusWatch']);
        gulp.watch('assets/views/**/*.jade', ['jadeWatch']);
        gulp.watch('assets/static/js/**/*', ['jsWatch']);
        gulp.watch('assets/static/img/**/*', ['imagesWatch']);
        gulp.watch('assets/static/mics/**/*', ['miscWatch']);
      });
  })
};
