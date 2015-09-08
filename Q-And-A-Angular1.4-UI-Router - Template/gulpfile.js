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

gulp.task('buildVendor',buildVendor);

gulp.task('buildVendorCss', buildVendorCss);

gulp.task('buildAppViews', buildAppViews);

gulp.task('buildApp',['buildAppViews'], buildApp);

gulp.task('build', [
    'buildVendor',
    'buildVendorCss',
    'buildApp'
], buildMin);

gulp.task('set-debug', setDebug);

gulp.task('buildVendorDebug',buildVendor);

gulp.task('buildAppViewsDebug', ['set-debug'], buildAppViews);

gulp.task('buildAppDebug',['buildAppViewsDebug'], buildApp);

gulp.task('build-debug', [
    'buildVendorDebug',
    'buildVendorCss',
    'buildAppDebug'
], buildMin);

function buildVendorCss(){
    gulp.src(['./bower_components/bootstrap/dist/css/bootstrap.css'],{base: 'bower_components/'})
        .pipe(concatCss("vendorStyles.css"))
        .pipe(gulp.dest('./dist/css'));
}

function buildApp(){
    return browserify('./app/app.js', {debug: isDebug})
        .bundle()
        .pipe(source('application.js'))
        .pipe(gulp.dest('./dist/js'));
}

function buildAppViews(){
    return gulp.src('./app/**/*.html')
        .pipe(templateCache({filename: 'appViews.js', module: 'appModule'}))
        .pipe(gulp.dest('./dist/views'));
}

function buildVendor(){
    return browserify(vendorSource, {debug: isDebug})
        .bundle()
        .pipe(source(vendorName))
        .pipe(gulp.dest('./dist/js'));
}

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