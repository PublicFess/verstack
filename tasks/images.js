var gulp = require('gulp')
  , imagemin = require('gulp-imagemin')
  , reload = require('browser-sync').reload;

gulp.task('imagesBuild', function() {
  return gulp.src('./assets/static/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/static/img'))
});

gulp.task('imagesWatch', function() {
  return gulp.src('./assets/static/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./site/static/img'))
    .pipe(reload({stream:true}));
});
