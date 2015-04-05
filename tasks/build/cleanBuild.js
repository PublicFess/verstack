var gulp = require('gulp')
  , del = require('del');

module.exports = function () {
  return gulp.task('cleanBuild', function (cb) {
    del([
      'build/'
    ], cb);
  });
};
