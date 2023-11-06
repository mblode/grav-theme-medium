const { src, dest, watch, series, parallel } = require('gulp');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const postcssPresetEnv = require('postcss-preset-env');

const sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

function styles() {
  return src(['src/styles/**/*.scss'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.error(error.message);
        this.emit('end');
      }
    }))
    .pipe(sass({
      includePaths: sassPaths
    }).on('error', sass.logError))
    .pipe(postcss([
      postcssPresetEnv(/* plugin options */)
    ]))
    .pipe(dest('dist/styles/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano())
    .pipe(dest('dist/styles/'));
}

function scripts() {
  return src('src/scripts/**/*.js')
    .pipe(plumber({
      errorHandler: function (error) {
        console.error(error.message);
        this.emit('end');
      }
    }))
    .pipe(concat('main.js'))
    .pipe(dest('dist/scripts/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(dest('dist/scripts/'));
}

function images() {
  return src('src/images/**/*')
    .pipe(dest('dist/images/'));
}

function watchFiles() {
  watch('src/styles/**/*.scss', styles);
  watch('src/scripts/**/*.js', scripts);
}

// Expose tasks to CLI
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.watch = watchFiles;

// Define complex tasks
const build = series(parallel(styles, scripts, images), watchFiles);

exports.default = build;
