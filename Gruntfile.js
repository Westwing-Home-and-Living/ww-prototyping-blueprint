/*global module:false*/
module.exports = function(grunt) {


    // load tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');

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
                src: 'src/sass/main.scss',
                dest: 'build/www/css/main.css'
            }
        },
        watch: {
            sass: {
                files: '<%= sass.www.src %>',
                tasks: ['sass:www']
            }
        }
    });

    // Default task.
    grunt.registerTask('default', ['sass']);

};