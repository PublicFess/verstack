var gulp = require('gulp')
  , browserify = require('gulp-browserify')
  , errorHandler = require('./errorHandler')()
  , reload = require('browser-sync').reload;

gulp.task('jsBuild', function() {
  return gulp.src('./assets/static/js/index.js')
    .pipe(browserify())
    .pipe(gulp.dest('./build/static/js'));
});

gulp.task('jsWatch', function() {
  return gulp.src('./assets/static/js/index.js')
    .pipe(browserify())
    .on('error', errorHandler)
    .pipe(gulp.dest('./site/static/js'))
    .pipe(reload({stream:true}));
});
