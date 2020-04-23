const {parallel, src, dest} = require('gulp');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

function minifyCSS() {
    return src('app/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dest('dist/css'));
}

function minifyHTML() {
    return src('app/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(dest('dist'));
}

function minifyJS() {
    return src('app/js/*.js')
        .pipe(uglify())
        .pipe(dest('dist/js'));
}

function moveAudio() {
    return src('app/media/audio/*.*')
        .pipe(dest('dist/media/audio'));
}

exports.default = parallel(minifyCSS, minifyJS, moveAudio, minifyHTML);