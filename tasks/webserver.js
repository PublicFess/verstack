var gulp = require('gulp')
  , webserver = require('browser-sync');

gulp.task('webserver', function () {
  return webserver({
    server: {
      baseDir: './site/html'
    }
  });
});
