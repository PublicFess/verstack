var gulp = require('gulp')
  , lr = require('tiny-lr')
  , server = lr()
  , requireDir = require('require-dir');

requireDir('./gulp', { recurse: true });

gulp.task('watch',
  ['stylusWatch',
    'jadeWatch',
    'jsWatch',
    'imagesWatch',
    'fontsWatch',
    'webserver'], function() {
    server.listen(9000, function(err) {
      if (err) return console.log(err);
      gulp.watch('assets/static/css/**/*.styl', ['stylusWatch']);
      gulp.watch('assets/views/**/*.jade', ['jadeWatch']);
      gulp.watch('assets/static/js/**/*', ['jsWatch']);
      gulp.watch('assets/static/img/**/*', ['imagesWatch']);
      gulp.watch('assets/static/fonts/**/*', ['imagesWatch']);
    });

  });

gulp.task('build',
  ['stylusBuild',
    'jadeBuild',
    'jsBuild',
    'imagesBuild',
    'fontsBuild']);



gulp.task('default', ['build/jade']);