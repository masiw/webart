let gulp = require('gulp')
  , mocha = require('gulp-mocha')
  , babel = require('gulp-babel')
  , eslint = require('gulp-eslint')
  , concat = require('gulp-concat')
  , del = require('del')
//  , sourcemaps = require('gulp-sourcemaps')



gulp.task('default', ['clean', 'lint', 'test', 'build'], function() {

})

gulp.task('build', function() {

  return gulp.src(['src/*.js'])
    .pipe(babel())
    .pipe(concat('webart.js'))
    .pipe(gulp.dest('dist'))
})

gulp.task('test', function() {

  return gulp.src(['./test/*.test.js'], { read: false })
    .pipe(mocha({
        reporter: 'spec'
      , compilers: { js:babel }
    }))
})

gulp.task('lint', function() {

  return gulp.src(['src/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
  
})

gulp.task('clean', function() {
  return del('dist')
})
