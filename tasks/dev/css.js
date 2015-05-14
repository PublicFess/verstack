var gulp = require('gulp')
  , stylus = require('gulp-stylus')
  , autoprefixer = require('gulp-autoprefixer')
  , nib = require('nib')
  , errorHandler = require('../errorHandler')()
  , reload = require('browser-sync').reload;

gulp.task('dev:css', function() {
  return gulp.src(['./assets/static/css/*.styl',
    '!./assets/static/css/_*.styl'])
    .pipe(stylus({
      'include css': true,
      use: nib()
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .on('error', errorHandler)
    .pipe(gulp.dest('./site/static/css/'))
    .pipe(reload({stream:true}));
});
