const gulp = require('gulp');
const mocha = require('gulp-mocha');
const watch = require('gulp-watch');

gulp.task('mocha', function(){
	gulp.src('test/test.js', {read: false})
	.pipe(mocha({reporter: 'nyan'}));
})

gulp.task('default', function(){
	gulp.watch('*.js', ['mocha']);
});


