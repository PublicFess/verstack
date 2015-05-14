var gulp = require('gulp')
  , jade = require('gulp-jade')
  , data = require('gulp-data')
  , errorHandler = require('../errorHandler')()
  , reload = require('browser-sync').reload
  , paths = ['./assets/views/**/*.jade',
    '!./assets/views/**/_*.jade',
    '!./assets/views/**/layout.jade'];

gulp.task('dev:html', function() {
  return gulp.src(paths)
    .pipe(data(function () {
      return {
        staticUrl: '/static'
      }
    }))
    .pipe(jade({
      pretty: true
    }))
    .on('error', errorHandler)
    .pipe(gulp.dest('./site/html/'))
    .pipe(reload({stream:true}));
});
