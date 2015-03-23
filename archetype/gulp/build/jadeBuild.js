var gulp = require('gulp')
  , jade = require('gulp-jade')
  , data = require('gulp-data')
  , organizationId = require('../../package.json').name;

gulp.task('jadeBuild', function() {
  gulp.src(['./assets/views/**/*.jade',
    '!./assets/views/**/_*.jade',
    '!./assets/views/**/layout.jade'])
    .pipe(data(function () {
      return {
        staticUrl: '/static/organizations/' + organizationId + '/site/static',
        base: '/'
      }
    }))
    .pipe(jade())
    .on('error', console.log)
    .pipe(gulp.dest('./build/html/'))
});