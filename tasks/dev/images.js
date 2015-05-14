var gulp = require('gulp')
  , errorHandler = require('../errorHandler')()
  , reload = require('browser-sync').reload;

gulp.task('dev:images', function() {
  return gulp.src('./assets/static/img/**/*')
    .on('error', errorHandler)
    .pipe(gulp.dest('./site/static/img'))
    .pipe(reload({stream:true}));
});
