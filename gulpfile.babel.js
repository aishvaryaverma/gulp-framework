import { watch, series, parallel } from 'gulp';
import del from 'del';
import { styles, stylesProd } from './gulpjs/gulp-styles';
import { scripts, scriptsProd } from './gulpjs/gulp-scripts';
import { htmlInclude } from './gulpjs/gulp-html';


//  Not all tasks need to use streams, a gulpfile is just another node program
//  and you can use all packages available on npm, but it must return either a
//  Promise, a Stream or take a callback and call it

// Paths
export const paths = {
    styles: {
        src: './src/scss/**/*.scss',
        dest: 'build/css/'
    },
    scripts: {
        src: './src/js/**/*.js',
        dest: 'build/js/'
    },
    html: {
        src: './src/pages',
        dest: 'build/'
    }
};

// You can use multiple globbing patterns as you would with `gulp.src`,
// for example if you are using del 2.0 or above, return its promise
export const clean = () => del([ 'build/css/*.css', 'build/js/app.min.js', 'build/js/app.min.js.map' ]);

// FOR WATCHING FILES
const watchFiles = series(parallel(htmlInclude, styles, scripts), function watching() {
    watch(paths.styles.src, styles);
    watch(paths.scripts.src, scripts);
    watch(paths.html.src + '/**/*.html', htmlInclude);
});
export { watchFiles as watch };
export { htmlInclude as html };

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
export const build = series(clean, parallel(htmlInclude, stylesProd, scriptsProd));
// export const build = series(htmlInclude, styles, scripts);

/*
 * Define default task that can be called by just running `gulp` from cli
 */
export default build;