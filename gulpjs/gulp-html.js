import { src, dest } from 'gulp';
import { paths } from '../gulpfile.babel';

// HTML packages
import fileinclude from 'gulp-file-include';

const path = './src/pages/';
const pages = [
    path + 'index.html',
    path + 'about.html',
];

// FOR HTML PAGES
export const htmlInclude = () => {
    return src(pages)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest('build'))
}
