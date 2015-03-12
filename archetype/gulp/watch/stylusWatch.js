var gulp = require('gulp')
  , stylus = require('gulp-stylus')
  , nib = require('nib')
  , webserver = require('gulp-connect');

gulp.task('stylusWatch', function() {
  gulp.src(['./assets/static/css/*.styl',
    '!./assets/static/css/_*.styl'])
    .pipe(stylus({
      'include css': true,
      use: nib()
    }))
    .on('error', console.log)
    .pipe(gulp.dest('./site/static/css/'))
    .pipe(webserver.reload());
});