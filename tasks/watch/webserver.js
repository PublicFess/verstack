var gulp = require('gulp')
  , webserver = require('browser-sync');

module.exports = function () {
  return gulp.task('webserver', function () {
    webserver({
      server: {
        baseDir: './site'
      }
    });
  });
};
