import gulp from 'gulp';
import yargs from 'yargs';
import path from 'path';
import template from 'gulp-template';
import rename from 'gulp-rename';


const ZERO = 0;
const ONE = 1;
const ROOT = 'src';
const COMPONENTS = 'app/components';
const TEMPLATES = 'generator/component/**/*.**';

const cap = (val) => val.charAt(ZERO).toUpperCase() + val.slice(ONE);
const resolveToComponents = (glob = '') => path.join(ROOT, COMPONENTS, glob);

gulp.task('component', () => {
  const name = yargs.argv.name;
  const parentPath = yargs.argv.parent || '';
  const destPath = path.join(resolveToComponents(), parentPath, name);

  return gulp.src(TEMPLATES)
    .pipe(template({
      name,
      upCaseName: cap(name)
    }))
    .pipe(rename((pathDir) => {
      pathDir.basename = pathDir.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPath));
});
