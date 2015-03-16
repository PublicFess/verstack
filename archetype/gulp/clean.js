var gulp = require('gulp')
  , rimraf = require('gulp-rimraf');

gulp.task('clean', function () {
  return gulp.src('site/', {read: false})
    .pipe(rimraf())
});
