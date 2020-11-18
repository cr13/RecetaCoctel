module.exports = function (grunt) {
    require('time-grunt')(grunt); // Para visualizar los tiempos de cada tarea
    require('load-grunt-tasks')(grunt); // <-- uses `load-grunt-tasks`
    require('jit-grunt')(grunt);  //precarga todas las dependecias, de esta forma agilizamos la ejecución de las tareas

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        jshint: {
            all: ["Gruntfile.js", "src/**/*.js", "src/test/**/*.js"],
            options: {
                jshintrc: '.jshintrc',
            },        
        },

        shell: {
            npm_install: {
                command: 'npm install',
            },
            npm_ci: {
                command: 'npm ci',
            },
            npm_test_jest: {
                command: 'npm test',
            }
        }
    });

    //Plugins

    // Comprobación de de sintaxis
    grunt.loadNpmTasks('grunt-contrib-jshint');

    //Tareas


    //Instalación de dependencias o actualización de las existentes
    grunt.registerTask('install', ['shell:npm_install']);
    //Tarea para ejecución en integración continua o para instalar 
    //dependencias sin modificar el package-lock.json
    grunt.registerTask("ci", ["shell:npm_ci"]);
    //Ejecuta tests
    grunt.registerTask('default', ['shell:npm_test_jest', 'jshint']);

};