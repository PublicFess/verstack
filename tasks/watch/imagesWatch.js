var gulp = require('gulp')
  , imagemin = require('gulp-imagemin')
  , reload = require('browser-sync').reload;

module.exports = function () {
  return gulp.task('imagesWatch', function() {
    gulp.src('./assets/static/img/**/*')
      .pipe(imagemin())
      .pipe(gulp.dest('./site/static/img'))
      .pipe(reload({stream:true}));
  });

};
