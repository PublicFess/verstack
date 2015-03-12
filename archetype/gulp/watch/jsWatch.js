var gulp = require('gulp')
  , webserver = require('gulp-connect');

gulp.task('jsWatch', function() {
  gulp.src(['./assets/static/js/**/*.js'])
    .on('error', console.log)
    .pipe(gulp.dest('./site/static/js'))
    .pipe(webserver.reload());
});