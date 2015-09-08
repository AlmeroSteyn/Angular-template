'use strict';
/// <vs BeforeBuild='build' />
var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    concatCss = require('gulp-concat-css'),
    less = require('gulp-less'),
    LessPluginCleanCSS = require('less-plugin-clean-css'),
    cleancss = new LessPluginCleanCSS({advanced: true}),
    rename = require('gulp-rename'),
    templateCache = require('gulp-angular-templatecache'),
    preprocessify = require('preprocessify'),
    uglify = require('gulp-uglify'),
    vendorSource = './vendor.minified.js',
    vendorName = 'vendor.min.js',
    isDebug = false;

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
], buildMin);

function buildMin() {
    return gulp.src('./dist/js/application.js')
        .pipe(uglify())
        .pipe(rename('application.min.js'))
        .pipe(gulp.dest('./dist/js'));
}

function setDebug() {
    vendorSource = './vendor.js';
    vendorName = 'vendor.js';
    isDebug = true;
}