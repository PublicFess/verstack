var gulp = require('gulp')
  , jade = require('gulp-jade')
  , data = require('gulp-data')
  , reload = require('browser-sync').reload
  , paths = ['./assets/views/**/*.jade',
    '!./assets/views/**/_*.jade',
    '!./assets/views/**/layout.jade'];

gulp.task('jadeBuild', function() {
  return gulp.src(paths)
    .pipe(data(function () {
      return {
        staticUrl: require(process.cwd() + '/verstack.json').staticUrl
      }
    }))
    .pipe(jade())
    .pipe(gulp.dest('./build/html/'))
});

gulp.task('jadeWatch', function() {
  return gulp.src(paths)
    .pipe(data(function () {
      return {
        staticUrl: '/static'
      }
    }))
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./site/html/'))
    .pipe(reload({stream:true}));
});
