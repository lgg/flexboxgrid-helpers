/* Vars */
var gulp = require('gulp'),
    cssmin = require('gulp-cssmin'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    stylus = require('gulp-stylus');

/* Sources */
var src_path = 'sources/';
var src_stylus = src_path + 'css/**/*.styl';

/* Destination folder */
var DEST = 'dist/';

/* Other */
var browsers_ver = ['not ie <= 9', 'iOS > 7'];

/* Tasks */
gulp.task('default', ['build', 'watch']);

gulp.task('build', [
    'buildStylus'
]);

// Watch Files For Changes
gulp.task('watch', function () {
    //watch sources
    gulp.watch(src_stylus, ['reloadStylus']);
});

/* -------------------- Stylus */
//Reload
gulp.task('reloadStylus', function () {
    gulp.src(src_stylus)
        .pipe(stylus())
        .pipe(autoprefixer({
            browsers: browsers_ver,
            cascade: false
        }))
        .pipe(concat("flexboxgrid-helpers.css"))
        .pipe(gulp.dest(DEST + 'css'))
});

//Build
gulp.task('buildStylus', function () {
    gulp.src(src_stylus)
        .pipe(stylus())
        .pipe(autoprefixer({
            browsers: browsers_ver,
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(concat("flexboxgrid-helpers.min.css"))
        .pipe(gulp.dest(DEST + 'css'))
});
