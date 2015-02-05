module.exports = function(grunt) {

  grunt.initConfig({
    // clean: ['build/*'],
    copy: {
      main: {
        files: [{
          src: 'public/bower_components/normalize.css/normalize.css',
          dest: 'public/scss/_normalize.scss'
        }, {
          src: 'public/bower_components/modernizr/modernizr.js',
          dest: 'public/js/lib/modernizr.js'
        }, {
          src: 'public/bower_components/requirejs/require.js',
          dest: 'public/js/lib/require.js'
        }]
      }
    },
    sass: {
      main: {
        files: [{
          src: 'public/scss/main.scss',
          dest: 'public/css/main.css'
        }]
      }
    },
    cssmin: {
      main: {
        src: 'public/css/main.css',
        dest: 'public/css/main.css'
      }
    },
    imagemin: {
      img: {
        files: [{
          expand: true,
          cwd: 'public/img/src',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'public/img'
        }]
      },
      css: {
        files: [{
          expand: true,
          cwd: 'public/css/img/src',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'public/css/img'
        }]
      }
    },
    jshint: {
      gruntfile: ['gruntfile.js'],
      main: {
        src: ['public/js/*.js'],
        options: {
          globals: {
            jQuery: true,
            console: true,
            module: true
          }
        }
      }
    },
    uglify: {
      lib: {
        files: [{
          expand: true,
          cwd: 'public/js/lib',
          src: ['**/*.js'],
          dest: 'public/js/lib'
        }]
      }
    },
    watch: {
      jshint: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      },
      sass: {
        files: ['<%= sass.main.files %>'],
        tasks: ['sass']
      }
    }
  });

  // grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // grunt.registerTask('build', ['clean', 'copy', 'cssmin', 'uglify', 'requirejs']);
  grunt.registerTask('default', ['copy', 'sass']);
  grunt.registerTask('build', ['copy', 'cssmin', 'uglify', 'imagemin']);
};