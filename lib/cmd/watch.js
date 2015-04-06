'use strict';

var gulp = require('gulp')
  , path = require('path')
  , utils = require('../utils')
  , done = require('../done');

require('../../tasks');

module.exports = exports = function(opts) {
  gulp.run('watch')
};
