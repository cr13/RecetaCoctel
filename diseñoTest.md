---
layout: default
title: diseñoTest
---

###### [Inicio](./) | [Roadmap](./Roadmap.html) | [HU](./hu.html) | [Clases](./clases_desarrolladas) | [Tools Test](./aserciones_sis_pruebas.html) | [Contenedor](./contenedor.html) | [Docker Hub](./docker_hub.html) | [GitHubContainerRegistry](./githubcontainerregistry.html) | [CI](./ci.html) | [Framework API](./frameworkAPI.html) | [Diseño API](./diseñoAPI.html) | [Buenas Prácticas](./bnpracticas.html)  


## Diseño de los test.

Para la realización de los test vamos a seguir utilizando Jest aunque para los test utilizando la API hemos tenido que añadir supertest.

Como se han modificado las clases para mejorar la eficiencia a la hora de realizar búsqueda de datos, además de las mejoras que se han estimado oportunas, se han modificado todos los ficheros de test.

Test Receta
- [2215d1f](https://github.com/cr13/RecetaCoctel/commit/2215d1f1a5cd41bb5825e012fb20ca145383b162)

Test Clase controladora de receta
    - Añadir una receta[8488955](https://github.com/cr13/RecetaCoctel/commit/8488955afc22ceb0efe83a11b6be3a64d9fdb2d9)
    - Búsqueda por titulo [9cc9036](https://github.com/cr13/RecetaCoctel/commit/9cc9036ed153fc032520e32a709f87c241ea9471)

Test Ingredientes
    - [2215d1f ](https://github.com/cr13/RecetaCoctel/commit/8af3cd95097fbeabca1ba40becba7b512bb76bf4#diff-944456afa8b87a27520cc9bb37b45391c6c68777cbd9f48e3dd062a32dcd7490)

Test Clase controladora de ingredientes
    - [98efc94 ](https://github.com/cr13/RecetaCoctel/commit/98efc9427a050e118167b255ea6dc494b9107006)

<a name="testapi"></a>

Además se ha creado un fichero de test nuevo para probar las rutas de la API. Este fichero de test esta creando siguiendo las historias de usuarios. Se puede ver [aquí](https://github.com/cr13/RecetaCoctel/blob/main/src/test/api_recetas.test.js).

- [Test](https://github.com/cr13/RecetaCoctel/commit/13983100f7bad9e1059c1c05727ca79d613bfac9#diff-1cb874bc84f73e86571a31380a17bb4d34d62e3b505ac18dd693d563889a9f20) para obtener todas las recetas o una receta indicando el titulo.


- [Test](https://github.com/cr13/RecetaCoctel/commit/1a707312068fce26ab52f22c1d9c7cab29677039#diff-1cb874bc84f73e86571a31380a17bb4d34d62e3b505ac18dd693d563889a9f20) para insertar una receta.


- [Test](https://github.com/cr13/RecetaCoctel/commit/7e9c96d28fc5121404458ebc64d31c45fdbf0367#diff-1cb874bc84f73e86571a31380a17bb4d34d62e3b505ac18dd693d563889a9f20) para eliminar una receta.


Como dato a tener en cuenta al ahora de ejecutar los test con Jest y supertest puede ocurrir que se quede colgado y sistemas de integracion continua como Travis quede en bucle, para solventarlo he cambiado la forma de ejecutarlo añadiendo las siguientes banderas:

```bash
    jest --detectOpenHandles --forceExit
```

Se puede comprobar en el [package.json](https://github.com/cr13/RecetaCoctel/blob/main/package-lock.json).



### Referencias:
- [Testing NodeJs/Express API with Jest and Supertest](https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6)
- [Jest](https://jestjs.io/docs/en/getting-started)
- [Supertest](https://www.npmjs.com/package/supertest)
