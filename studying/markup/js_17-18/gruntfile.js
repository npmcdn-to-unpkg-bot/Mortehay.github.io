module.exports = function(grunt) {

grunt.initConfig({
concat: {
  js: {
    options: {
      separator: ';'
    },
    src: [
      'js/*.js'
    ],
    dest: 'js/scripts.min.js'
  },
},

uglify: {
  options: {
    mangle: false
  },
  js: {
    files: {
      'js/scripts.min.js': ['js/scripts.min.js']
    }
  }
},

less: {
  style: {
    files: {
      "css/style.css": "less/style.less"
    },
  }
},

watch: {
  js: {
    files: ['js/*.js'],
    tasks: ['concat:js', 'uglify:js'],
    options: {
        livereload: 35729
    }
  },
  css: {
    files: ['less/*.less'],
    tasks: ['less:style'],
    options: {
        livereload: 35729
    }
},
  php : {
    files : ['**/*.php'],
    options : {
      livereload : 35729
      } 
  }
}
  });



grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);
};