var gulp = require('gulp')
  , del = require('del');

gulp.task('build:clean', function (cb) {
  del([
    'build/'
  ], cb);
});
