const {series, src, dest} = require('gulp');
const htmlmin = require('gulp-htmlmin');

function minifyHTML() {
    return src('app/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(dest('dist'));
}

exports.default = series(minifyHTML);