'use strict';
var gulp = require('gulp')
  , less = require('gulp-less')
  , replace = require('gulp-replace')
  , clean = require('gulp-clean')
  , gulpReact = require('gulp-react');

module.exports = {

  less: function(){
    gulp.src('./node_modules/react-bootstrap-modal/lib/*.css')
        .pipe(gulp.dest('./lib'));

    gulp.src('./src/*.less')
        .pipe(less({ compress: true }))
        .pipe(gulp.dest('./lib'));
  },

  clean: function(){
    return gulp
      .src('./lib/*', { read: false })
      .pipe(clean())
  }, 

  compile: function(){

    return gulp
      .src(['./src/**/*.jsx', './src/**/*.js'])
      .pipe(gulpReact({ harmony: true }))
      .pipe(replace(/\.jsx/g, ''))
      .pipe(gulp.dest('./lib'));
  }
  
}
