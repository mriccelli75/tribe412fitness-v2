var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('styles', function(){
  gulp.src('./css/style.css')
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('html', function(){
  gulp.src('./*.html')
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function() {
  
  browserSync.init({
    server: {
      baseDir: './'
    }
});

gulp.watch('./css/styles.css').on('change', browserSync.reload);
gulp.watch('./**/*.html').on('change', browserSync.reload);

});

gulp.task( 'default', ['styles', 'serve']);