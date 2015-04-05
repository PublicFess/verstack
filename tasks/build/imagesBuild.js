var gulp = require('gulp')
  , imagemin = require('gulp-imagemin');

module.exports = function () {
  return gulp.task('imagesBuild', function() {
    gulp.src('./assets/static/img/**/*')
      .pipe(imagemin())
      .pipe(gulp.dest('./build/static/img'))
  });
};
