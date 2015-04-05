var gulp = require('gulp')
  , stylus = require('gulp-stylus')
  , nib = require('nib');

module.exports = function () {
  return gulp.task('stylusBuild', function() {
    gulp.src(['./assets/static/css/*.styl',
      '!./assets/static/css/_*.styl'])
      .pipe(stylus({
        'include css': true,
        use: nib(),
        compress: true
      }))
      .pipe(gulp.dest('./build/static/css/'))
  });
};
