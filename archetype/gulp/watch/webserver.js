var gulp = require('gulp')
  , webserver = require('gulp-connect');

gulp.task('webserver', function () {
  webserver.server({
    root: './site/',
    livereload: true
  });
});