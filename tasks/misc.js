var gulp = require('gulp')
  , reload = require('browser-sync').reload;

gulp.task('miscBuild', function() {
  return gulp.src('./assets/static/misc/**')
    .pipe(gulp.dest('./build/static/misc'))
});

gulp.task('miscWatch', function() {
  return gulp.src('./assets/static/misc/**')
    .pipe(gulp.dest('./site/static/misc'))
    .pipe(reload({stream:true}));
});