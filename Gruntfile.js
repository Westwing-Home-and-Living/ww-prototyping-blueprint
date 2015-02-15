/*global module:false*/
module.exports = function (grunt) {

    var fs = require('fs');
    var path = require('path');
    // load tasks
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-hologram');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-react');



    // Project configuration.
    grunt.initConfig({

        // Metadata.
        pkg: grunt.file.readJSON('package.json'),

        // Task configuration.
        express: {
            server: {
                options:{
                    port: 9000,
                    hostname: '127.0.0.1',
                    bases: 'build/',
                    server: path.resolve('./server.js'),
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
                    {src: 'src/js/styleguide.js', dest: 'build/styleguide/js/styleguide.min.js'},
                    {src: 'src/js/jquery.js', dest: 'build/styleguide/js/jquery.min.js'},
                    {src: 'src/js/JSXTransformer.js', dest: 'build/styleguide/js/JSXTransformer.min.js'},
                    {src: 'src/js/react.js', dest: 'build/styleguide/js/react.min.js'}
                ]
            },
            www: {
                files: [
                    {src: 'src/js/jquery.js', dest: 'build/www/js/jquery.min.js'},
                    {src: 'src/js/JSXTransformer.js', dest: 'build/www/js/JSXTransformer.min.js'},
                    {src: 'src/js/react.js', dest: 'build/www/js/react.min.js'}
                ],
                options: {
                    mangle: false
                }
            }
        },
        react: {
            jsx: {
                options: {
                    transform: [require('grunt-react').browserify]
                },
                files: [
                    {src: 'src/js/react/*.jsx', dest: 'build/www/js/output.js'},
                    {src: 'src/js/react/*.jsx', dest: 'build/styleguide/js/output.js'}
                ]

            }
        },
        copy: {
            json: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['src/js/data/comments.json'],
                    dest: 'build/www/data/',
                    filter: 'isFile'
                }]
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
                files: 'src/js/*.js',
                tasks: ['uglify:styleguide','uglify:www'],
               options: {
                    atBegin: true,
                    spawn: false,
                    livereload: true
                }
            },
            react: {
                files: 'src/js/react/*.jsx',
                tasks: ['react:jsx'],
                options: {
                    atBegin: true,
                    spawn: false,
                    livereload: true
                }
            },
            json: {
                files: 'src/js/data/*.json',
                tasks: ['copy:json'],
                options: {
                    atBegin: true,
                    spawn: false,
                    livereload: false
                }
            },
            assemble: {
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
    grunt.registerTask('serve', ['express:server','open','copy','watch']);

};