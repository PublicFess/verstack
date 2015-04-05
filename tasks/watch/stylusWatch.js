var gulp = require('gulp')
  , stylus = require('gulp-stylus')
  , nib = require('nib')
  , autoprefixer = require('gulp-autoprefixer')
  , reload = require('browser-sync').reload;

module.exports = function () {
  return gulp.task('stylusWatch', function() {
    gulp.src(['./assets/static/css/*.styl',
      '!./assets/static/css/_*.styl'])
      .pipe(stylus({
        'include css': true,
        use: nib()
      }))
      .pipe(autoprefixer({
        browsers: ['last 10 versions'],
        cascade: false
      }))
      .pipe(gulp.dest('./site/static/css/'))
      .pipe(reload({stream:true}));
  });
};
