const gulp = require('gulp');
const eslint = require('gulp-eslint-new');
const exec = require('child_process').exec;
const inject = require('gulp-inject-string');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const sass = require('gulp-dart-sass');
const stylelint = require('@ronilaukkarinen/gulp-stylelint');

// lint SCSS
function scssLint() {

    return gulp.src('./src/scss/**/*.scss').pipe(
        stylelint({
            reporters: [
                {
                    formatter: 'string',
                    console: true,
                }
            ],
        }),
    );

}

// generate & minify css as a critical template
function scssCompile() {

    return gulp.src([
            './src/scss/theme.scss',
        ])
        .pipe(sass({
            outputStyle: 'compressed',
        }).on('error', sass.logError))
        .pipe(rename({
            extname: '.njk',
        }))
        .pipe(inject.wrap('<style>\n', '</style>'))
        .pipe(gulp.dest('./src/templates/includes/critical/'))

}

// scss build task
exports.scss = gulp.parallel(scssLint, scssCompile);

// Lint JS
function jsLint() {

    return gulp.src('./src/js/**/*')
        .pipe(
            eslint({
                useEslintrc: true,
                fix: true,
            }),
        )
        .pipe(eslint.format());

}

// Generate & Minify Reading List JS
function bookstoreCompile(done) {

    exec('npx vite build -c vite.config.bookStore.js', function build(stdout, stderr) {

        if (stdout) {

            console.log(stdout);

        }
        if (stderr) {

            console.log(stderr);

        }

    });
    done();

}

// js build task
exports.js = gulp.parallel(jsLint, bookstoreCompile);

function watch() {
    gulp.watch('./src/scss/**/*.scss', { ignoreInitial: false }, gulp.series('scss'));
    gulp.watch('./src/js/**/*', { ignoreInitial: false }, gulp.series('js'));
};

exports.default = watch;
