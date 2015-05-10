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
    'jsLibsWatch',
    'imagesWatch',
    'fontsWatch',
    'videosWatch',
    'webserver', function() {
    server.listen(9000, function(err) {
      if (err) return console.log(err);
      gulp.watch('assets/static/css/**/*', ['stylusWatch']);
      gulp.watch('assets/views/**/*.jade', ['jadeWatch']);
      gulp.watch('assets/static/js/**/*', ['jsWatch', 'jsLibsWatch']);
      gulp.watch('assets/static/img/**/*', ['imagesWatch']);
      gulp.watch('assets/static/fonts/**/*', ['imagesWatch']);
      gulp.watch('assets/static/videos/**/*', ['videosWatch']);
    });
  })
});

gulp.task('build', function (cb) {
  runSequence('cleanBuild',
    'stylusBuild',
    'jadeBuild',
    'jsBuild',
    'imagesBuild',
    'fontsBuild',
    'videosBuild', cb);
});
