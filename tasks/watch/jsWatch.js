var gulp = require('gulp')
  , reload = require('browser-sync').reload
  , browserify = require('gulp-browserify');

module.exports = function () {
  return gulp.task('jsWatch', function() {
    gulp.src('./assets/static/js/index.js')
      .pipe(browserify())
      .pipe(gulp.dest('./site/static/js'))
      .pipe(reload({stream:true}));
  });
};
