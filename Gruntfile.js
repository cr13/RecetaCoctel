module.exports = function (grunt) {
    require('time-grunt')(grunt); // Para visualizar los tiempos de cada tarea
    require('load-grunt-tasks')(grunt); // <-- uses `load-grunt-tasks`
    require('jit-grunt')(grunt);  //precarga todas las dependecias, de esta forma agilizamos la ejecución de las tareas

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        shell: {
            npm_install: {
                command: 'npm install',
            },
            npm_test_jest: {
                command: 'npm test',
            }
        }
    });

    //Tarea de instalación
    grunt.registerTask("install", ["shell:npm_install"]);

    //Tarea para ejecutar tests
    grunt.registerTask('default', ['shell:npm_test_jest']);

};