var gulp = require('gulp')
  , browserify = require('gulp-browserify')
  , errorHandler = require('./errorHandler')()
  , reload = require('browser-sync').reload;

gulp.task('jsBuild', function() {
  return gulp.src('./assets/static/js/*.js')
    .pipe(browserify())
    .pipe(gulp.dest('./build/static/js'));
});

gulp.task('jsLibsBuild', function() {
  return gulp.src('./assets/static/js/libs/*.js')
    .pipe(gulp.dest('./build/static/js/libs'));
});

gulp.task('jsWatch', function() {
  return gulp.src('./assets/static/js/*.js')
    .pipe(browserify())
    .on('error', errorHandler)
    .pipe(gulp.dest('./site/static/js'))
    .pipe(reload({stream:true}));
});

gulp.task('jsLibsWatch', function() {
  return gulp.src('./assets/static/js/libs/*.js')
    .pipe(gulp.dest('./site/static/js/libs'));
});
