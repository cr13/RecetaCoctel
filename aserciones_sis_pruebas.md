---
layout: default
title: Herramientas_Test
---

###### [Inicio](./) | [Roadmap](./Roadmap.html) | [HU](./hu.html) | [Clases](./clases_desarrolladas) | [Tools Test](./aserciones_sis_pruebas.html) | [Contenedor](./contenedor.html) | [Docker Hub](./docker_hub.html) | [GitHubContainerRegistry](./githubcontainerregistry.html) | [CI](./ci.html) | (Framework API)[./frameworkAPI.html]


<a name="item1"></a>

## Elección y justificación de la biblioteca de aserciones

Para la elección de la biblioteca de aserciones se han tenido en cuenta las vista en el [temario](http://jj.github.io/CC/documentos/temas/Desarrollo_basado_en_pruebas): [Chai](https://www.chaijs.com/), [Should.js](https://github.com/tj/should.js), [Must.js](https://github.com/moll/js-must) y assert que es la librería que forma parte de la estándar de Javascript.

En una primera instancia había elegido **Chai**, el principal motivo es porque es la más usada junto al marco de pruebas **mocha**, su funcionamiento es un estilo al de la librería assert de Javascript. Además de ser una biblioteca de aserciones BDD / TDD y se puede combinar con cualquier marco de prueba de JavaScript. 

Pero finalmente en el siguiente punto al investigar los marcos de prueba comprobé que **jest** ya trae incorporado una biblioteca de aserciones.

<a name="item2"></a>

## Buscar un sistema de prueba del código, una librería o marco

Para la elección del sistema de pruebas se han investigado cuatro: los vistos en el temario [Mocha](https://mochajs.org/) y [Jasmine](https://jasmine.github.io/), y dos nuevos que están marcando tendencia como son [AVA](https://github.com/avajs/ava) y [Jest](https://jestjs.io/).

Finalmente me he decantado por **Jest** por varios motivos:
1. Incorpora capacidades de built-in mocking y aserción.
2. Ejecuta sus pruebas de forma paralela, lo que proporciona una ejecución de prueba más suave y más rápida.
3. Funcionamiento inmediato tras instalación, sin necesidad de configuración previa. Aunque puede ser [configurado](https://jestjs.io/docs/en/configuration).

## Conclusión

En toda las buenas prácticas se recomienda usar Chai y Mocha cuando tu proyecto es grande con necesidades de flexibilidad y personalización. Jest se recomienda para proyectos más livianos ya que no necesitas configuración adicional por adelantado. 
Por lo tanto, como no lo he utilizado nunca y estamos para aprender cosas nuevas me he decidido por usar Jest.

<a name="item3"></a>


## Gestor de tareas

Siguiendo el temario existen dos gestores de tareas **gulp** y **grunt**, los cuales son muy similares, la única diferencia que he encontrado es que gulp puede ser considerado más rápido en su ejecución debido a que lleva a cabo los procesos en la memoria y escribe directamente en los ficheros. En cambio grunt está orientada a los ficheros, es decir, los crea en local y de forma temporal como resultado de las tareas ejecutada. 
Por esto lo normal es que elija gulp, pero viendo la forma de crear las tareas me quedo con grunt me resulta mas fácil.

Para su uso se ha creado el fichero [Gruntfile.js](https://github.com/cr13/RecetaCoctel/blob/main/Gruntfile.js), en el que se han definido 4 tareas, 2 para instalación, otra para la realización de los test jest y una ultima ha sido añadida para comprobar la sintaxis del código.

Para la ejecución de las diferentes instalaciones y realización de test se ha utilizado [grunt-shell](https://www.npmjs.com/package/grunt-shell) y para la comprobación de sintaxis de las clases desarrolladas se ha utilizado el plugin [grunt-contrib-jshint](https://www.npmjs.com/package/grunt-contrib-jshint).

Además, se han añadido algunas herramientas como [time-grunt](https://www.npmjs.com/package/time-grunt) que muestra unas estadísticas de la ejecución de cada tarea como el tiempo de ejecución. Y la otra añadida ha sido [jit-grunt](https://www.npmjs.com/package/jit-grunt) que sirve para pre-cargar todos los plugins de grunt para agilizar las diferentes tareas (aunque en nuestro caso no tenemos muchos plugins para notar un cambio significativo).

Al ejecutar la tarea de test se utiliza el comando *npm test*, el motivo ha sido porque [grunt-jest](https://www.npmjs.com/package/grunt-jest) está en desuso como se puede comprobar en su documentación oficial.

Por otro lado, se ha añadido un [fichero](https://github.com/cr13/RecetaCoctel/blob/main/.jshintrc) de configuración las opciones para el plugin *jshint*, para indicar la versión de javascript, con el objetivo de evitar los warnings ('const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).)

### Descripción de las tareas de ejecución:

```bash
    # Instala las dependencias necesarias indicadas en el package.json.
    grunt install   

    # Instalación limpia de las dependencias del package.json, ideal para integración continua.
    grunt ci        

    # Ejecuta tarea por defecto, en mi caso ejecuta los test y el plugin para comprobar sintaxis.
    grunt     
```

## Instrucciones de Uso

```bash

    # Instala gestor grunt.
    npm i -D grunt-cli

    # Instala las dependencias necesarias.
    grunt install   

    # Ejecuta tarea por defecto, en mi caso ejecuta los test y el plugin para comprobar sintaxis.
    grunt           

```
---

### Referencias consultadas:

- [ionos.es gulp vs grunt](https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/gulp-vs-grunt-que-diferencia-a-estos-task-runners/)

- [blog grunt vs gulp + ejemplos](https://blog.koalite.com/2015/06/grunt-o-gulp-que-uso/)

- [Tutorial básico gulp](https://frontendlabs.io/1669--gulp-js-en-espanol-tutorial-basico-primeros-pasos-y-ejemplos)

- [Video tutorial gulp](https://es.coursera.org/lecture/disenando-paginas-bootstrap4/automatizadores-de-tareas-gulp-yg01h)

- [Turorial grunt](https://gruntjs.com/getting-started)

- [Video tutorial grunt](https://es.coursera.org/lecture/disenando-paginas-bootstrap4/automatizadores-de-tareas-grunt-IPaB7)