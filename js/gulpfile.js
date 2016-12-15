// 加载插件

var gulp = require('gulp'),
    less = require('gulp-less'),
    minify = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

    
gulp.task('move', function () {
	gulp.src(['qianfeng/src/*.html'])
	.pipe(gulp.dest('qianfeng/dist'))
})

gulp.task('moveimg', function () {
	gulp.src(['qianfeng/src/img/*'])
	.pipe(gulp.dest('qianfeng/dist/img'))
})

gulp.task('less2css', function () {
	gulp.src('qianfeng/src/less/*.less')
	.pipe(less())  // *.css
	.pipe(concat("dist.css"))
	.pipe(gulp.dest('qianfeng/dist/css'))
	.pipe(rename({suffix: '.min'}))
	.pipe(minify())
	.pipe(gulp.dest('qianfeng/dist/css'))
})

gulp.task('jsopt', function () {
	gulp.src(["qianfeng/src/js/jquery-1.8.3.min.js","qianfeng/src/js/index.js"])
	.pipe(concat('dist.js'))
	.pipe(gulp.dest('qianfeng/dist/js'))
	.pipe(rename({suffix: '.min'}))  // main.js => main.min.js
	.pipe(uglify())  //main.min.js
	.pipe(gulp.dest('qianfeng/dist/js'))
})

gulp.task('watch', ['less2css', 'jsopt', 'move', 'moveimg'], function () {
	gulp.watch(['qianfeng/src/less/*.less','qianfeng/src/*.html', 'qianfeng/src/js/*.js'], ['less2css', 'jsopt', 'move', 'moveimg']);
})
    
    



    

