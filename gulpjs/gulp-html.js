import { src, dest } from 'gulp';

// HTML packages
import fileinclude from 'gulp-file-include';

const path = './src/html/';

const pages = [
    path + 'index.html'
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
