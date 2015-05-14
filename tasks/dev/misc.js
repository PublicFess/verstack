var gulp = require('gulp')
  , errorHandler = require('../errorHandler')()
  , reload = require('browser-sync').reload;

gulp.task('dev:misc', function() {
  return gulp.src('./assets/static/misc/**')
    .on('error', errorHandler)
    .pipe(gulp.dest('./site/static/misc'))
    .pipe(reload({stream:true}));
});
