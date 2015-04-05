var gulp = require('gulp')
  , jade = require('gulp-jade')
  , data = require('gulp-data')
  , reload = require('browser-sync').reload;

module.exports = function () {
  return gulp.task('jadeWatch', function() {
    gulp.src(['./assets/views/**/*.jade',
      '!./assets/views/**/_*.jade',
      '!./assets/views/**/layout.jade'])
      .pipe(data(function () {
        return {
          staticUrl: '/static',
          base: '/html/'
        }
      }))
      .pipe(jade({
        pretty: true
      }))
      .pipe(gulp.dest('./site/html/'))
      .pipe(reload({stream:true}));
  });
};
