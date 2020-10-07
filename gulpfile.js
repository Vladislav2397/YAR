let 
  gulp = require('gulp'),
  rename = require('gulp-rename'),
  autoprefixer = require('gulp-autoprefixer'),
  sourcemaps = require('gulp-sourcemaps'),
  sass = require('gulp-sass'),
  pug = require('gulp-pug'),
  minify = require('gulp-minify'),
  browserSync = require('browser-sync');


function pugCompiler(done) {
  gulp.src("./src/templates/pages/*.pug")
    .pipe(pug({
      pretty: true
    }))
    .on('error', console.error.bind(console))
    .pipe(gulp.dest("./dist/"));
  done();
}

function scssCompiler(done) {
  gulp.src("./src/styles/style.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({
      errorLogToConsole: true,
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 versions'],
      cascade: false
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./dist/public/css/"))
    .pipe(browserSync.stream());
  done();
}

function minifyJS(done) {
  gulp.src("./src/scripts/*.js")
    .pipe(minify({
      ext: {
        min: '.min.js'
      },
    }))
    .pipe(gulp.dest('./dist/public/js/'));
  done();
}

function sync(done) {
  browserSync.init({
    server: {
      baseDir: "./dist/"
    }
  });
  done();
}

function browserReload(done) {
  browserSync.reload();
  done();
}

function watch() {
  gulp.watch('src/styles/**/*.scss', scssCompiler)
  gulp.watch('src/templates/**/*.pug', pugCompiler)
  gulp.watch('src/scripts/**/*.js', minifyJS)
  gulp.watch('dist/**/*.{html,css,js}', browserReload)
}


exports.default = gulp.parallel(
  sync,
  watch
);