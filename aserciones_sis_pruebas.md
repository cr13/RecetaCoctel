---
layout: default
title: Herramientas_Test
---

##### [Inicio](./) | [Roadmap](./Roadmap.html) | [HU](./hu.html) | [Tools Test](./aserciones_sis_pruebas.html)


## Elección y justificación de la biblioteca de aserciones

Para la elección de la biblioteca de aserciones se han tenido en cuenta las vista en el [temario](http://jj.github.io/CC/documentos/temas/Desarrollo_basado_en_pruebas): [Chai](https://www.chaijs.com/), [Should.js](https://github.com/tj/should.js), [Must.js](https://github.com/moll/js-must) y assert que es la librería que forma parte de la estándar de Javascript.

En una primera instancia había elegido **Chai**, el principal motivo es porque es la más usada junto al marco de pruebas **mocha**, su funcionamiento es un estilo al de la librería assert de Javascript. Además de ser una biblioteca de aserciones BDD / TDD y se puede combinar con cualquier marco de prueba de JavaScript. 

Pero finalmente en el siguiente punto al investigar los marcos de prueba comprobe que **jest** ya trae incorporado una biblioteca de aserciones.

## Buscar un sistema de prueba del código, una librería o marco

Para la elección del sistema de pruebas se han investigado cuatro: los vistos en el temario [Mocha](https://mochajs.org/) y [Jasmine](https://jasmine.github.io/), y dos nuevos que están marcando tendencia como son [AVA](https://github.com/avajs/ava) y [Jest](https://jestjs.io/).

Finalmente me he decantado por **Jest** por varios motivos:
1. Incorpora capacidades de built-in mocking y aserción.
2. Ejecuta sus pruebas de forma paralela, lo que proporciona una ejecución de prueba más suave y más rápida.
3. Funcionamiento inmediato tras instalación, sin necesidad de configuración previa. Aunque puede ser [configurado](https://jestjs.io/docs/en/configuration).

## Conclusión

En toda las buenas prácticas se recomienda usar Chai y Mocha cuando tu proyecto es grande con necesidades de flexibilidad y personalización. Jest se recomienda para proyectos más livianos ya que no necesitas configuración adicional por adelantado. 
Por lo tanto, como no lo he utilizado nunca y estamos para aprender cosas nuevas me he decidido por usar Jest.