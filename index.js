var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var notify = require('gulp-notify');
var gulpif = require('gulp-if');
var elixir = require('laravel-elixir');

elixir.extend('angular', function(src, output, outputFilename) {

    var config = this;

    var baseDir = src || config.assetsDir + 'angular/';

    gulp.task('angular', function() {
        var onError = function(err) {
            notify.onError({
                title:    "Laravel Elixir",
                subtitle: "Angular Compilation Failed!",
                message:  "Error: <%= error.message %>",
                icon: __dirname + '/../laravel-elixir/icons/fail.png'
            })(err);

            this.emit('end');
        };

        // Module inits have to be included first.
        return gulp.src([baseDir + "*_module.js", baseDir + "**/*.js"])
            .pipe(jshint())
            .pipe(jshint.reporter(stylish))
            .pipe(jshint.reporter('fail')).on('error', onError)
            .pipe(sourcemaps.init())
            .pipe(concat(outputFilename || 'app.js'))
            .pipe(ngAnnotate())
            .pipe(gulpif(config.production, uglify()))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(output || config.jsOutput))
            .pipe(notify({
                title: 'Laravel Elixir',
                subtitle: 'Angluar Compiled!',
                icon: __dirname + '/../laravel-elixir/icons/laravel.png',
                message: ' '
            }));
    });

    this.registerWatcher('angular', baseDir + '/**/*.js');

    return this.queueTask('angular');

});
