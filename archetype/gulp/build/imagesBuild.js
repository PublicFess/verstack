var gulp = require('gulp')
  , imagemin = require('gulp-imagemin');

gulp.task('imagesBuild', function() {
  gulp.src('./assets/static/img/**/*')
    .pipe(imagemin())
    .on('error', console.log)
    .pipe(gulp.dest('./site/static/img'))
});