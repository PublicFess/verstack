var gulp = require('gulp')
  , del = require('del');

gulp.task('cleanBuild', function (cb) {
  del([
    'build/'
  ], cb);
});

gulp.task('cleanWatch', function (cb) {
  del([
    'site/'
  ], cb)
});
