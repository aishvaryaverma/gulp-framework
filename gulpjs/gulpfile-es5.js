import { src, dest, watch, series, parallel } from 'gulp';
import del from 'del';
// CSS packages
import sass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
// Js packages
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';

// Paths
const paths = {
    styles: {
        src: './src/css/**/*.scss',
        dest: 'build/css/'
    },
    scripts: {
        src: './src/js/**/*.js',
        dest: 'build/js/'
    }
};

/* Not all tasks need to use streams, a gulpfile is just another node program
 * and you can use all packages available on npm, but it must return either a
 * Promise, a Stream or take a callback and call it
 */
// You can use multiple globbing patterns as you would with `gulp.src`,
// for example if you are using del 2.0 or above, return its promise
export const clean = () => del([ 'build' ]);

// FOR STYLESHEETS
export const styles = () => {
    return src(paths.styles.src)
        .pipe(sass())
        .pipe(dest(paths.styles.dest))
};

export const stylesProduction = () => {
    return src(paths.styles.src)
        .pipe(sass())
        // Add browser list in package json as recommended
        // .pipe(autoprefixer({ cascade: false, overrideBrowserslist: ['last 10 versions'] }))
        .pipe(autoprefixer({ cascade: false }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({
            basename: 'style',
            suffix: '.min'
        }))
        .pipe(dest(paths.styles.dest))
};

// FOR JAVASCRIPTS
export const scripts = () => {
    return src(paths.scripts.src, { sourcemaps: true })
        .pipe(sourcemaps.init())
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(concat('all.js'))
        // .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(dest(paths.scripts.dest))
};
export const scriptsProduction = () => {
    return src(paths.scripts.src)
        .pipe(sourcemaps.init())
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(dest(paths.scripts.dest))
};

// FOR WATCHING FILES
export const watchFiles = () => {
    watch(paths.styles.src, styles);
    watch(paths.scripts.src, scripts);
};

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
const build = series(clean, parallel(stylesProduction, scriptsProduction));

/*
 * Define default task that can be called by just running `gulp` from cli
 */
export default build;