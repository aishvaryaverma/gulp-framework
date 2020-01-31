import { src, dest } from 'gulp';
import { paths } from '../gulpfile.babel';

// Js packages
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';

// FOR JAVASCRIPTS
export const scripts = () => {
    return src(paths.scripts.src)
        .pipe(sourcemaps.init())
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(concat('app.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(paths.scripts.dest))
};

export const scriptsProd = () => {
    return src(paths.scripts.src)
        .pipe(sourcemaps.init())
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(dest(paths.scripts.dest))
};