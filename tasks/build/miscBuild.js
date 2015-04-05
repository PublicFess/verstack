var gulp = require('gulp');

module.exports = function () {
  return gulp.task('miscBuild', function() {
    gulp.src('./assets/static/misc/**/*')
      .pipe(gulp.dest('./build/static/misc'))
  });
};
