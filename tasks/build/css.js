var gulp = require('gulp')
  , stylus = require('gulp-stylus')
  , autoprefixer = require('gulp-autoprefixer')
  , nib = require('nib');

gulp.task('build:css', function() {
  return gulp.src(['./assets/static/css/*.styl',
    '!./assets/static/css/_*.styl'])
    .pipe(stylus({
      'include css': true,
      use: nib(),
      compress: true
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./build/static/css/'))
});
