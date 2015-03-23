var gulp = require('gulp')
  , server = require('tiny-lr')()
  , runSequence = require('run-sequence')
  , requireDir = require('require-dir');

requireDir('./gulp', { recurse: true });

gulp.task('watch', function () {
  runSequence(
    'cleanWatch',
    'stylusWatch',
    'jadeWatch',
    'jsWatch',
    'imagesWatch',
    'fontsWatch',
    'webserver', function() {
      server.listen(9000, function(err) {
        if (err) return console.log(err);
        gulp.watch('assets/static/css/**/*.styl', ['stylusWatch']);
        gulp.watch('assets/views/**/*.jade', ['jadeWatch']);
        gulp.watch('assets/static/js/**/*', ['jsWatch']);
        gulp.watch('assets/static/img/**/*', ['imagesWatch']);
        gulp.watch('assets/static/fonts/**/*', ['imagesWatch']);
      });
    })
});

gulp.task('build', function (cb) {
  runSequence('cleanBuild',
    'stylusBuild',
    'jadeBuild',
    'jsBuild',
    'imagesBuild',
    'fontsBuild', cb);
});
