var gulp = require('gulp')
  , browserify = require('gulp-browserify');

gulp.task('build:js', function() {
  return gulp.src('./assets/static/js/**.js')
    .pipe(browserify())
    .pipe(gulp.dest('./build/static/js'));
});

gulp.task('build:jsLibs', function() {
  return gulp.src('./assets/static/js/libs/**.js')
    .pipe(gulp.dest('./build/static/js/libs'));
});
