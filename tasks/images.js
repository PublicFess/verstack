var gulp = require('gulp')
  , imagemin = require('gulp-imagemin')
  , errorHandler = require('./errorHandler')()
  , reload = require('browser-sync').reload;

gulp.task('imagesBuild', function() {
  return gulp.src('./assets/static/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/static/img'))
});