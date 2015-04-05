var gulp = require('gulp')
  , reload = require('browser-sync').reload;

module.exports = function () {
  return gulp.task('miscWatch', function() {
    gulp.src('./assets/static/misc/**/*')
      .pipe(gulp.dest('./site/static/misc'))
      .pipe(reload({stream:true}));
  });
};
