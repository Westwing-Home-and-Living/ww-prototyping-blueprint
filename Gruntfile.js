/*global module:false*/
module.exports = function (grunt) {


    // load tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-hologram');

    // Project configuration.
    grunt.initConfig({

        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

        // Task configuration.
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
        watch: {
            sass: {
                files: 'src/**/*.scss',
                tasks: ['sass:www','sass:styleguide']
            }
        }
    });

    // Default task.
    grunt.registerTask('default', ['sass', 'hologram']);

};