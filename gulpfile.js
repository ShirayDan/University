const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
// const concat = require('gulp-concat')

// const stylesBundle = () => src('src')

function buildStyles() {
  return src('index.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(dest('css'))
}

function watchTask() {
  watch(['index.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)
