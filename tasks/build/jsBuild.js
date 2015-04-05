var gulp = require('gulp')
  , browserify = require('gulp-browserify');

module.exports = function () {
  return gulp.task('jsBuild', function() {
    gulp.src('./assets/static/js/index.js')
      .pipe(browserify())
      .pipe(gulp.dest('./build/static/js'));
  });
};
