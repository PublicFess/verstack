var gulp = require('gulp')
  , browserify = require('gulp-browserify')
  , errorHandler = require('../errorHandler')()
  , reload = require('browser-sync').reload;

gulp.task('dev:js', function() {
  return gulp.src('./assets/static/js/**.js')
    .pipe(browserify())
    .on('error', errorHandler)
    .pipe(gulp.dest('./site/static/js'))
    .pipe(reload({stream:true}));
});

gulp.task('dev:jsLibs', function() {
  return gulp.src('./assets/static/js/libs/**.js')
    .pipe(gulp.dest('./site/static/js/libs'));
});
