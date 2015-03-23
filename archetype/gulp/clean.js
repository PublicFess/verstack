var gulp = require('gulp')
  , rimraf = require('gulp-rimraf');

gulp.task('cleanWatch', function () {
  return gulp.src('site/', {read: false})
    .pipe(rimraf())
});

gulp.task('cleanBuild', function () {
  return gulp.src('build/', {read: false})
    .pipe(rimraf())
});
