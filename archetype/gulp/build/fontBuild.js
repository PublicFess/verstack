var gulp = require('gulp');

gulp.task('fontsBuild', function() {
  
  gulp.src('./assets/static/fonts/**/*')
    .on('error', console.log)
    .pipe(gulp.dest('./site/static/fonts'))
});