'use strict';

var gulp = require('gulp');

require('../../tasks/dev');

module.exports = exports = function(opts) {
  gulp.start('dev')
};
