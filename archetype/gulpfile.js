var gulp = require('gulp')
  , jade = require('gulp-jade')
  , data = require('gulp-data')
  , stylus = require('gulp-stylus')
  , nib = require('nib')
  , uglify = require('gulp-uglify')
  , imagemin = require('gulp-imagemin')
  , lr = require('tiny-lr')
  , server = lr()
  , webserver = require('gulp-connect')
  , organizationId = require('./package.json').name;

gulp.task('stylusWatch', function() {
  gulp.src(['./assets/static/css/*.styl',
    '!./assets/static/css/_*.styl'])
    .pipe(stylus({
      'include css': true,
      use: nib()
    }))
    .on('error', console.log)
    .pipe(gulp.dest('./site/static/css/'))
    .pipe(webserver.reload());
});

gulp.task('stylusBuild', function() {
  gulp.src(['./assets/static/css/*.styl',
    '!./assets/static/css/_*.styl'])
    .pipe(stylus({
      'include css': true,
      use: nib(),
      compress: true
    }))
    .on('error', console.log)
    .pipe(gulp.dest('./site/static/css/'))
});

gulp.task('jadeWatch', function() {
  gulp.src(['./assets/views/**/*.jade',
    '!./assets/views/**/_*.jade',
    '!./assets/views/**/layout.jade'])
    .pipe(data(function () {
      return {
        staticUrl: '../static',
        base: '/html/'
      }
    }))
    .pipe(jade({
      pretty: true
    }))
    .on('error', console.log)
    .pipe(gulp.dest('./site/html/'))
    .pipe(webserver.reload());
});

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
    .pipe(gulp.dest('./site/html/'))
});

gulp.task('jsWatch', function() {
  gulp.src(['./assets/static/js/**/*.js'])
    .on('error', console.log)
    .pipe(gulp.dest('./site/static/js'))
    .pipe(webserver.reload());
});

gulp.task('jsBuild', function() {
  gulp.src(['./assets/static/js/**/*.js'])
    .on('error', console.log)
    .pipe(gulp.dest('./site/static/js'))
});

gulp.task('imagesWatch', function() {
  gulp.src('./assets/static/img/**/*')
    .pipe(imagemin())
    .on('error', console.log)
    .pipe(gulp.dest('./site/static/img'))
    .pipe(webserver.reload());
});

gulp.task('imagesBuild', function() {
  gulp.src('./assets/static/img/**/*')
    .pipe(imagemin())
    .on('error', console.log)
    .pipe(gulp.dest('./site/static/img'))
});

gulp.task('fontsWatch', function() {
  gulp.src('./assets/static/fonts/**/*')
    .on('error', console.log)
    .pipe(gulp.dest('./site/static/fonts'))
    .pipe(webserver.reload());
});

gulp.task('fontsBuild', function() {
  gulp.src('./assets/static/fonts/**/*')
    .on('error', console.log)
    .pipe(gulp.dest('./site/static/fonts'))
});

gulp.task('webserver', function () {
  webserver.server({
    root: './site/',
    livereload: true
  });
});

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