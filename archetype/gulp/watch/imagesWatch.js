var gulp = require('gulp')
  , imagemin = require('gulp-imagemin')
  , webserver = require('gulp-connect');

gulp.task('imagesWatch', function() {
  gulp.src('./assets/static/img/**/*')
    .pipe(imagemin())
    .on('error', console.log)
    .pipe(gulp.dest('./site/static/img'))
    .pipe(webserver.reload());
});
