'use strict';

var gulp = require('gulp');

require('../../tasks/build');

module.exports = exports = function(opts) {
  gulp.start('build')
};
