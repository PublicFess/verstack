var gulp = require('gulp');

gulp.task('jsBuild', function() {
  gulp.src(['./assets/static/js/**/*.js'])
    .on('error', console.log)
    .pipe(gulp.dest('./site/static/js'))
});
