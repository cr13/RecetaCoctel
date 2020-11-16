---
layout: default
title: Herramientas_Test
---

##### [Inicio](./) | [Roadmap](./Roadmap.html) | [HU](./hu.html) | [Tools Test](./aserciones_sis_pruebas.html)

<a name="item1"></a>

## Elección y justificación de la biblioteca de aserciones

Para la elección de la biblioteca de aserciones se han tenido en cuenta las vista en el [temario](http://jj.github.io/CC/documentos/temas/Desarrollo_basado_en_pruebas): [Chai](https://www.chaijs.com/), [Should.js](https://github.com/tj/should.js), [Must.js](https://github.com/moll/js-must) y assert que es la librería que forma parte de la estándar de Javascript.

En una primera instancia había elegido **Chai**, el principal motivo es porque es la más usada junto al marco de pruebas **mocha**, su funcionamiento es un estilo al de la librería assert de Javascript. Además de ser una biblioteca de aserciones BDD / TDD y se puede combinar con cualquier marco de prueba de JavaScript. 

Pero finalmente en el siguiente punto al investigar los marcos de prueba comprobe que **jest** ya trae incorporado una biblioteca de aserciones.

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

Siguiendo el temario existen dos gestores de tareas **gulp** y **grunt**, los cuales son muy similares, la unica diferencia que he encontrado es que gulp puede ser considerado más rápido en su ejecución debido a que lleva a cabo los procesos en la memoria y escribe directamente en los ficheros. En cambio grunt está orientada a los ficheros, es decir, los crea en local y de forma temporal como resultado de las tareas ejecutada. 
Por esto lo normal es que elija gulp, pero viendo la forma de crear las tareas me quedo con grunt me resulta mas fácil.

Referencias consultadas:
- [ionos.es gulp vs grunt](https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/gulp-vs-grunt-que-diferencia-a-estos-task-runners/)

- [blog grunt vs gulp + ejemplos](https://blog.koalite.com/2015/06/grunt-o-gulp-que-uso/)

- [Tutorial básico gulp](https://frontendlabs.io/1669--gulp-js-en-espanol-tutorial-basico-primeros-pasos-y-ejemplos)

- [Video tutorial gulp](https://es.coursera.org/lecture/disenando-paginas-bootstrap4/automatizadores-de-tareas-gulp-yg01h)

- [Turorial grunt](https://gruntjs.com/getting-started)

- [Video tutorial grunt](https://es.coursera.org/lecture/disenando-paginas-bootstrap4/automatizadores-de-tareas-grunt-IPaB7)