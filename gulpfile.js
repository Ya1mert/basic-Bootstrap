var gulp = require('gulp'),
    connect = require('gulp-connect'),
    opn = require('opn');

// Запускаем локальный сервер
gulp.task('connect', function() {
    connect.server({
        root: '',
        livereload: true,
        port: 8888
    });
    opn('http://localhost:8888');
});

// Работа с HTML
gulp.task('html', function () {
    gulp.src('./*.html')
        .pipe(connect.reload());
});
// Работа с CSS
gulp.task('css', function () {
    gulp.src('./css/*.css')
        .pipe(connect.reload());
});
// Работа с JS
gulp.task('js', function () {
    gulp.src('./js/*.js')
        .pipe(connect.reload());
});
// Слежка
gulp.task('watch', function () {
    gulp.watch(['./*.html'], ['html']);
    gulp.watch(['./css/*.css'], ['css']);
    gulp.watch(['./js/*.js'], ['js']);
});

// Работа по-умолчанию
gulp.task('default', ['connect', 'watch']);