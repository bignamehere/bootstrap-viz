module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: 'js/*.js',
                dest: 'bootstrap-viz-1.0.0/js/bootstrap-viz.js'
            }
        },
        
        uglify: {
            build: {
                src: 'bootstrap-viz-1.0.0/js/bootstrap-viz.js',
                dest: 'bootstrap-viz-1.0.0/js/bootstrap-viz.min.js'
            }
        },
        
        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify']
            }
        }
        
    });

    grunt.registerTask('default', ['uglify'] );
    grunt.registerTask('runConcat', ['concat']);
    grunt.registerTask('runWatch', ['watch']);

};
