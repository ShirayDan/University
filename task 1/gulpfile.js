const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const cssnano = require('gulp-cssnano')
const imagemin = require('gulp-imagemin')
const rename = require('gulp-rename')
const del = require('del')

function buildStyles() {
  return src('scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(dest('./dist/css'))
}

function watchTask() {
  watch(['scss/**/*.scss'], buildStyles)
}

// lab tasks

function bundleJs() {
  return src('./js/**/*.js').pipe(uglify()).pipe(dest('./dist/js'))
}

function createStyleBundle() {
  return src('./css/**/*.css').pipe(concat('style.css')).pipe(dest('./dist/css'))
}

function minifyCss() {
  return src('./css/**/*.css').pipe(cssnano()).pipe(dest('./dist/css'))
}

function minifyImages() {
  return src('./i/*.{jpg,png,gif,svg}').pipe(imagemin()).pipe(dest('./dist/images'))
}

function renameTask() {
  return src('./js/**/*.js')
    .pipe(rename({ suffix: '-min' }))
    .pipe(dest('./dist/js'))
}

function deleteTask() {
  return del(['dist'])
}

exports.default = series(buildStyles, watchTask)
exports.createStyles = createStyleBundle
exports.uglify = bundleJs
exports.minifyCss = minifyCss
exports.minifyImages = minifyImages
exports.rename = renameTask
exports.delete = deleteTask
