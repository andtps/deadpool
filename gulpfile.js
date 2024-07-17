const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Função para compilar Sass
function buildStyles() {
  return gulp.src('./src/scss/**/*.scss') // Verifique se este é o caminho correto para seus arquivos .scss
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css/'));
}

// Função para observar mudanças nos arquivos Sass
function watchFiles() {
  gulp.watch('./src/scss/**/*.scss', buildStyles); // Verifique se este é o caminho correto para seus arquivos .scss
}

// Exporta as tarefas
exports.buildStyles = buildStyles;
exports.watch = watchFiles;

// Define a tarefa padrão
exports.default = gulp.series(buildStyles);
