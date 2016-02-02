'use strict';

/***************
 * PLUGINS
 ****************/
var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);
var $ = require('gulp-load-plugins')({
  pattern: [
    'path',
    'gulp-angular-templatecache',
    'gulp-htmlmin',
    'gulp-concat',
    'gulp-ng-annotate'
  ]
});

/***************
 * CONFIG FILE
 ****************/
var config = require('./config.js');

/**************************************
*********** ENVIRONMENT : PROD *********
***************************************/

/**
 * Task : generate-sources
 * Description: The task that generates files that will be injected.
 */
gulp.task('generate-sources', function(callback){
    runSequence(
        'generate-templatecache', // Take all html files and generate it in a JS angular file
        'generate-scripts', // Generate JS app file
        'generate-styles', // Generate CSS app file
        callback
    );
});

/**
 * Task : generate-templatecache
 * Description: The task that generates the templateCache JS file from html files
 */
gulp.task('generate-templatecache', function(){

    return gulp.src(config.FILTERS.HTML.PROD)
        .pipe($.angularTemplatecache('templateCacheHtml.js', {
            module: config.APP_NAME,
            root: config.TEMPLATES_ROOT
        }))
        .pipe(gulp.dest(config.FOLDERS.GENERATED_SCRIPTS));
});

/**
 * Task : generate-scripts
 * Description: The task that generates the app.js file
 */
gulp.task('generate-scripts', function(){

    return gulp.src(config.FILTERS.SCRIPTS.PROD)
        .pipe($.ngAnnotate())
        .pipe($.concat('app.js'))
        .pipe(gulp.dest(config.FOLDERS.GENERATED_SCRIPTS));
});

/**
 * Task : generate-styles
 * Description: The task that generates the app.css file
 */
gulp.task('generate-styles', function(){

    return gulp.src(config.FILTERS.STYLES.CSS.PROD)
        .pipe($.concat('app.css'))
        .pipe(gulp.dest(config.FOLDERS.GENERATED_STYLES));
});

