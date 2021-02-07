---
layout: default
title: diseñoAPI
---

###### [Inicio](./) | [Roadmap](./Roadmap.html) | [HU](./hu.html) | [Clases](./clases_desarrolladas) | [Tools Test](./aserciones_sis_pruebas.html) | [Contenedor](./contenedor.html) | [Docker Hub](./docker_hub.html) | [GitHubContainerRegistry](./githubcontainerregistry.html) | [CI](./ci.html) | [Framework API](./frameworkAPI.html) | [Diseño Test](./diseñoTest.html)  | [Buenas Prácticas](./bnpracticas.html) | [Despliegue](./heroku.html)
 

## Diseño en general del API.

En el raiz del proyecto se ha creado un nuevo directorio llamado [routes](https://github.com/cr13/RecetaCoctel/tree/main/routes), el cual va a contener todos los ficheros necesarios con las rutas que necesitemos.

He creado un fichero llamado [recetas.js](https://github.com/cr13/RecetaCoctel/blob/main/routes/recetas.js) el cual  contiene las rutas basadas en las Historias de usuario.

Desglose de las rutas según las historias de usuario:

1. [HU Como usuario, quiero dar de alta recetas ](https://github.com/cr13/RecetaCoctel/issues/6)
    - [post('/recetas/add'](https://github.com/cr13/RecetaCoctel/commit/6b2260af81f826b31ebcae0604890c97c015003f)
    Se utiliza el método Post dando como parámetros un objeto receta, y devuelve en caso de éxito el código 201 y en caso de que ya exista la receta devolverá 409.
3. [HU como usuario, quiero obtener Receta ](https://github.com/cr13/RecetaCoctel/issues/5)
    - [get(/recetas)](https://github.com/cr13/RecetaCoctel/commit/4e9c894b69aabaf80ef1c77a409a8130e110bf46#diff-a08d5008992b24301d6b45376dd061143a9579c2bb100e2ba6f36291db5b293b)
    Se utiliza el método Get, y devuelve en caso de éxito el código 200 y en caso de no existir ninguna receta 404.
    - [get(/recetas/:title)](https://github.com/cr13/RecetaCoctel/commit/938fcbd5443852e11d251438d6205f440a725b05#diff-a08d5008992b24301d6b45376dd061143a9579c2bb100e2ba6f36291db5b293b)
    Se utiliza el método Get dando como parámetro un titulo de receta,  y devuelve en caso de éxito el código 200 y en caso de no encontrar ninguna coincidencia devuelve 404.

5. [HU Como usuario, quiero poder eliminar Receta](https://github.com/cr13/RecetaCoctel/issues/8)
    - [delete(/recetas/del/:id_receta)](https://github.com/cr13/RecetaCoctel/commit/e3863bf0c7d36c10976bc3e658547d27bcba9370#diff-a08d5008992b24301d6b45376dd061143a9579c2bb100e2ba6f36291db5b293b)
    Se utiliza la función delete y se le pasa como parámetro a un id_receta o un objeto receta, devuelve en caso de éxito el código 200 y en caso de no encontrar la receta indicada devuelve 404.