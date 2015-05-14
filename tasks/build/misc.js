var gulp = require('gulp');

gulp.task('build:misc', function() {
  return gulp.src('./assets/static/misc/**')
    .pipe(gulp.dest('./build/static/misc'))
});
