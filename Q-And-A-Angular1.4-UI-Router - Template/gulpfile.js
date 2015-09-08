'use strict';
/// <vs BeforeBuild='build' />
var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    concatCss = require('gulp-concat-css'),
    templateCache = require('gulp-angular-templatecache');

gulp.task('buildVendor', function () {
    return browserify('./vendor.js', {debug: false})
        .bundle()
        .pipe(source('vendor.js'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('buildAppViews', function () {
    return gulp.src('./app/**/*.html')
        .pipe(templateCache({filename: 'appViews.js', module: 'appModule'}))
        .pipe(gulp.dest('./dist/views'));
});

gulp.task('buildApp',['buildAppViews'], function () {
    return browserify('./app/app.js', {debug: true})
        .bundle()
        .pipe(source('application.js'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('buildVendorCss', function(){
    gulp.src(['./bower_components/bootstrap/dist/css/bootstrap.css'],{base: 'bower_components/'})
        .pipe(concatCss("vendorStyles.css"))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('build', [
    'buildVendor',
    'buildVendorCss',
    'buildApp'
]);