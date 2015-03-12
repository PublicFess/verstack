var gulp = require('gulp')
  , jade = require('gulp-jade')
  , data = require('gulp-data')
  , webserver = require('gulp-connect');

gulp.task('jadeWatch', function() {
  gulp.src(['./assets/views/**/*.jade',
    '!./assets/views/**/_*.jade',
    '!./assets/views/**/layout.jade'])
    .pipe(data(function () {
      return {
        staticUrl: '../static',
        base: '/html/'
      }
    }))
    .pipe(jade({
      pretty: true
    }))
    .on('error', console.log)
    .pipe(gulp.dest('./site/html/'))
    .pipe(webserver.reload());
});