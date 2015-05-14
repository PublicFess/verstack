var gulp = require('gulp')
  , imagemin = require('gulp-imagemin');

gulp.task('build:images', function() {
  return gulp.src('./assets/static/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/static/img'))
});
