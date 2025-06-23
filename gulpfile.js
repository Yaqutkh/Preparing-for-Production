import gulp from 'gulp';
import shell from 'gulp-shell';


gulp.task('start', shell.task('parcel serve src/index.html'));


gulp.task('build', shell.task('parcel build src/index.html'));


gulp.task('test', shell.task('npm test'));


gulp.task('cypress', shell.task('npx cypress run'));


gulp.task('default', gulp.series('start'));
