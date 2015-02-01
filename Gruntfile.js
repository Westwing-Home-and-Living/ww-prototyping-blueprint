/*global module:false*/
module.exports = function (grunt) {


    // load tasks
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
                banner: '<%= banner %>',
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
                tasks: ['sass:www','sass:styleguide','hologram']
            },
            js: {
                files: 'src/**/*.js',
                tasks: ['uglify:styleguide']
            }
        }
    });

    // Default task.
    grunt.registerTask('default', ['sass', 'hologram','uglify']);

};