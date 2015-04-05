var gulp = require('gulp')
  , del = require('del');

module.exports = function () {
  return gulp.task('cleanWatch', function (cb) {
    del([
      'site/'
    ], cb)
  });
};
