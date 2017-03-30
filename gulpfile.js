var gulp = require('gulp'),
    less = require('gulp-less'),
    browserSync = require('browser-sync');


gulp.task('less', function() {
	return gulp.src('src/styles/less/style.less')
	.pipe(less())
	.pipe(gulp.dest('dist/styles/css'))
	.pipe(browserSync.reload( {
		stream:true
	}))
});

gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: ''
		},
		notify:false
	});
});

gulp.task('watch', ['browserSync', 'less'], function() {
	 gulp.watch('src/styles/less/*.less', ['less']);
});

