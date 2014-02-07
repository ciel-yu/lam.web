module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        less: {
            dev: {
                options: {
                    paths: [ "less" ],
                    strictMath: true,
                    strictUnits: true,
                    report: 'gzip'
                },
                files: [{
                    expand: true,
                    src: ['*.less'],
                    dest: 'css/',
                    cwd: 'less',
                    ext: '.css'
                }]
            },
            pro: {
                options: {
                    paths: [ "less" ],
                    strictMath: true,
                    strictUnits: true,
                    cleancss: true,
                    report: 'gzip'
                },
                files:[ {
                    expand: true,
                    src: ['*.less'],
                    dest: 'css/',
                    cwd: 'less',
                    ext: '.css'
                }]
            }
          
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', [ 'less:dev' ]);
};