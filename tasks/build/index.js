'use strict';

var gulp = require('gulp')
, runSequence = require('run-sequence');

require('./imagesBuild')();
require('./jadeBuild')();
require('./jsBuild')();
require('./miscBuild')();
require('./stylusBuild')();
require('./cleanBuild')();

module.exports = function () {
  gulp.task('build', function (cb) {
    runSequence(
      'cleanBuild',
      'stylusBuild',
      'jadeBuild',
      'jsBuild',
      'imagesBuild',
      'miscBuild', cb);
  })
};
