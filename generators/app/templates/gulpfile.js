var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var sass = require('gulp-sass');
var shell = require('gulp-shell');

//support dist files through cdn.  

gulp.task('clean', function () {
  return del(['./build/*']);
});

gulp.task('copy', function () {
  gulp.src('./examples/index.html')
    .pipe(gulp.dest('./build'));
  gulp.src('./examples/img/*')
      .pipe(gulp.dest('./build/img'));
});

gulp.task('sass', function () {
  return gulp.src(['./examples/scss/**/*.{scss,sass}'])
              .pipe(sass({ includePaths: ['bower_components', 'node_modules'], errLogToConsole: true}))
              .pipe(gulp.dest('./build/css'));
});

gulp.task('watch', ['copy', 'sass'], function () {
  gulp.watch(['./examples/**/*.{scss,sass}'], ['sass']);
  gulp.watch(['./examples/index.html'], ['copy']);
});

gulp.task('server', shell.task([
  'node devServer'
]));

gulp.task('default', ['watch', 'server'])
