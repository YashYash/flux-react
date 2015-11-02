var gulp = require('gulp');
	csslint = require('gulp-csslint'),
	livereload = require('gulp-livereload')

gulp.task('cssLint', function() {
  console.log('#### Gulp linting CSS files');
  gulp.src('css/*.css')
    .pipe(csslint())
    .pipe(csslint.reporter())
    .pipe(livereload());
});