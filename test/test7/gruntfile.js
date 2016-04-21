module.exports = function(grunt) {

grunt.initConfig({
  babel: {
  options: {
    plugins: ['transform-react-jsx'], // npm install babel-plugin-transform-react-jsx
    presets: ['es2015', 'react'] // npm install babel-preset-es2015 babel-preset-react
  },
  jsx: {
    files: [{
      expand: true,
      cwd: 'jsx',
      src: ['*.jsx'],
      dest: 'js/working/',
      ext: '.js'
    }]
  }
},
  concat: {
    js: {
      options: {
        separator: ';'
      },
      src: [
        'js/working/*.js'
      ],
      dest: 'js/scripts.js'
    },
  },

  uglify: {
    options: {
      mangle: false
    },
    js: {
      files: {
        'js/scripts.min.js': ['js/scripts.js']
      }
    }
  },

  sass: {
    style: {
      files: {
        "css/main.css": "css/main.scss"
      },
    }
  },

  cssmin: {
    target: {
      files: [{
        expand: true,
        cwd: 'css',
        src: ['main.css', '!main.min.css'],
        dest: 'css',
        ext: '.min.css'
      }]
    }
  },

  watch: {
      react: {
        files: 'jsx/*.jsx',
        tasks: ['babel', 'jsx'],
        options: {
            livereload: 35729
        }
      },
      js: {
        files: ['js/working/*.js'],
        tasks: ['concat:js', 'uglify:js'],
        options: {
            livereload: 35729
        }
      },
      css: {
        files: ['css/*.scss'],
        tasks: ['sass:style'],
        options: {
            livereload: 35729
        }
      },
      cssmin: {
        files: ['css/main.css'],
        tasks: ['cssmin:target'],
        options: {
            livereload: 35729
        }
      },
      
      html: {
        files: ['js_final_exam.html'],
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


  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);
};