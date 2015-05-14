var gulp = require('gulp')
  , jade = require('gulp-jade')
  , data = require('gulp-data')
  , paths = ['./assets/views/**/*.jade',
    '!./assets/views/**/_*.jade',
    '!./assets/views/**/layout.jade'];

gulp.task('build:html', function() {
  return gulp.src(paths)
    .pipe(data(function () {
      return {
        staticUrl: require(process.cwd() + '/verstack.json').staticUrl
      }
    }))
    .pipe(jade())
    .pipe(gulp.dest('./build/html/'))
});
