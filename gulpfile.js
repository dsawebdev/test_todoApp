const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

//Compile Sass & Inject into Browser
gulp.task('sass', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

//Move JS files to SRC
gulp.task('js', function () {
    return gulp.src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream());
});

//Watch Sass & Serve
gulp.task('serve', ['sass'], function () {
    browserSync.init({
        server: "./src"
    });
    gulp.watch(['src/scss/*.scss'], ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
    gulp.watch("src/js/*.js").on('change', browserSync.reload);
});

//Move Fonts Folder to SRC
gulp.task('fonts', function () {
    return gulp.src('node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest("src/fonts"));
});

//Move Font Awesome CSS to src/css
gulp.task('fa', function () {
    return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
        .pipe(gulp.dest("src/css"));
});

//Move Tachyons to CSS to src/css
gulp.task('tach', function () {
    return gulp.src('node_modules/tachyons/css/tachyons.min.css')
        .pipe(gulp.dest("src/css"));
});

gulp.task('default', ['js', 'serve', 'fa', 'fonts', 'tach'])