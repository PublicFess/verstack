var gulp = require('gulp')
  , webserver = require('gulp-connect');

gulp.task('fontsWatch', function() {
  gulp.src('./assets/static/fonts/**/*')
    .on('error', console.log)
    .pipe(gulp.dest('./site/static/fonts'))
    .pipe(webserver.reload());
});