var gulp = require('gulp')
  , stylus = require('gulp-stylus')
  , nib = require('nib');

gulp.task('stylusBuild', function() {
  gulp.src(['./assets/static/css/*.styl',
    '!./assets/static/css/_*.styl'])
    .pipe(stylus({
      'include css': true,
      use: nib(),
      compress: true
    }))
    .on('error', console.log)
    .pipe(gulp.dest('./build/static/css/'))
});