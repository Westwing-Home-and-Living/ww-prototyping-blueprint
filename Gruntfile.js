/*global module:false*/
module.exports = function (grunt) {


    // load tasks
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-hologram');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('assemble');

    // Project configuration.
    grunt.initConfig({

        // Metadata.
        pkg: grunt.file.readJSON('package.json'),

        // Task configuration.
        connect: {
            server: {
                options:{
                    port: 9000,
                    hostname: '127.0.0.1',
                    base: 'build/',
                    livereload: true
                }
            }
        },
        open: {
            www: {
                path: 'http://127.0.0.1:9000/www',
                app: 'Google Chrome',
                options: {
                    delay: '200'
                }
            },
            styleguide: {
                path: 'http://127.0.0.1:9000/styleguide',
                app: 'Google Chrome',
                options: {
                    delay: '200'
                }
            }
        },
        assemble: {
            options: {
                flatten: true,
                layout: 'page.hbs',
                layoutdir: './src/site/templates/layouts/',
                partials: './src/site/templates/partials/**/*.hbs'
            },
            site: {
                files: [
                    {src: './src/site/content/_pages/**/*.hbs', dest: 'build/www/'}
                ]
            }},
        sass: {
            options: {
                sourceMap: true
            },
            www: {
                files: [
                    {src: 'src/sass/main.scss', dest: 'build/www/css/main.css'},
                    {src: 'src/sass/main.scss', dest: 'build/styleguide/css/main.css'}
                ]
            },
            styleguide: {
                files: [
                    {src: 'src/sass/styleguide.scss', dest: 'build/styleguide/css/styleguide.css'}
                ]
            }
        },
        hologram: {
            generate: {
                options: {
                    config: 'hologram_config.yml'
                }
            }
        },
        uglify: {
            styleguide: {
                files: [
                    {src: 'src/js/handlebars-v2.0.0.js', dest: 'build/styleguide/js/handlebars.min.js'},
                    {src: 'src/js/styleguide.js', dest: 'build/styleguide/js/styleguide.min.js'}
                ]
            }
        },
        watch: {
            sass: {
                files: 'src/**/*.scss',
                tasks: ['sass:www','sass:styleguide','hologram'],
                options: {
                    atBegin: true,
                    spawn: false,
                    livereload: true
                }
            },
            hologram: {
                files: 'src/styleguide/**/*.*',
                tasks: ['hologram'],
                options: {
                    atBegin: true,
                    spawn: false,
                    livereload: true
                }
            },
            js: {
                files: 'src/**/*.js',
                tasks: ['uglify:styleguide'],
                options: {
                    atBegin: true,
                    spawn: false,
                    livereload: true
                }
            },
            staticsitegenerator: {
                files: 'src/site/**/*.*',
                tasks: ['assemble'],
                options: {
                    atBegin: true,
                    spawn: false,
                    livereload: true
                }
            }
        }
    });

    // Default task.
    grunt.registerTask('serve', ['connect:server','open','watch']);

};