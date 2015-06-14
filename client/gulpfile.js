var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  uglify = require('gulp-uglify'),
  minifyCss = require('gulp-minify-css'),
  csslint = require('gulp-csslint'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload'),
  jade = require('gulp-jade'),
  concat = require('gulp-concat'),
  prefix = require('gulp-autoprefixer'),
  react = require('gulp-react'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  reactify = require('reactify')

gulp.task('start', function() {
  nodemon({
    script: '../server/start.js'
  })
});

// Scripts
gulp.task('scripts', function() {
  console.log('#### Gulp minifying script files');
  browserify({
    entries: ['js/main'],
    extensions: ['.jsx'],
    paths: ['../node_modules', './js/']
  })
    .transform(reactify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('build/js'))
    .pipe(livereload());
});

// Styles
gulp.task('cssLint', function() {
  console.log('#### Gulp linting CSS files');
  gulp.src('css/*.css')
    .pipe(csslint())
    .pipe(csslint.reporter())
    .pipe(livereload());
});

gulp.task('styles', function() {
  console.log('#### Gulp Minifying CSS files');
  gulp.src('css/*.css')
    .pipe(plumber())
    .pipe(concat('all.min.css'))
    .pipe(minifyCss())
    .pipe(prefix('last 3 versions'))
    .pipe(gulp.dest('build/css'))
    .pipe(livereload());
});

// Templates
gulp.task('templates', function() {
  console.log('#### Reloading the templates');
  gulp.src('views/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(livereload());
});


// Watch Tasks
// Watch JS
gulp.task('watch', function() {

  livereload.listen();
  console.log('#### Watching file change');
  gulp.watch([
    'js/*.js',
    'js/AppComponent.js',
    'js/components/recipe/*.js',
    'js/actions/*.js',
    'js/stores/*.js'
    ], 
    ['scripts']
  );
  gulp.watch('css/*.css', ['cssLint', 'styles', 'start']);
  gulp.watch('views/*.jade', ['templates']);
});

gulp.task('default', ['cssLint', 'templates', 'scripts', 'styles', 'watch', 'start']);
