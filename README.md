# RecetaCoctel

Proyecto para la asignatura de Cloud Computing I 

![Docker Cloud Build Status](https://img.shields.io/docker/cloud/build/cr13/recetacoctel)  [![Travis Status](https://travis-ci.com/cr13/RecetaCoctel.svg?branch=main)](https://travis-ci.com/cr13/RecetaCoctel) 
[![Node JS CI Status](https://github.com/cr13/RecetaCoctel/workflows/Node.js%20CI/badge.svg)](https://github.com/cr13/RecetaCoctel/actions)  [![CircleCI Status](https://circleci.com/gh/cr13/RecetaCoctel.svg?style=shield)](https://app.circleci.com/pipelines/github/cr13/RecetaCoctel?branch=main)

## Justificación técnica del framework elegido para el microservicio.

El framework elegido a sido express se pude ver justificación [aquí](https://cr13.github.io/RecetaCoctel/frameworkAPI.html).

## Diseño en general del API.

El diseño desarrollado se describe [aquí](https://cr13.github.io/RecetaCoctel/diseñoAPI.html).

## Uso de buenas prácticas: configuración distribuida, logs.

Buenas practicas implementadas [aquí](https://cr13.github.io/RecetaCoctel/bnpracticas.html).

## Diseño de los test.

Desarrollo de los test [aquí](https://cr13.github.io/RecetaCoctel/diseñoTest.html).

## Otros trabajos.

Se ha creado la imagen Docker para producción, se puede ver [aquí](./production.Dockerfile)

## Avance del proyecto

- Lo primero que se ha realizado ha sido añadir el control de tipos en los parámetros de las clases.
    - [5d14a28](https://github.com/cr13/RecetaCoctel/commit/5d14a28aa9c2263447b1a82cca6b84b5cf447cf9)
    - [f51a60f](https://github.com/cr13/RecetaCoctel/commit/f51a60ffe13dc51fc5f6d48740338dd2abd6a611)
    - [b730205](https://github.com/cr13/RecetaCoctel/commit/f51a60ffe13dc51fc5f6d48740338dd2abd6a611)
- Se ha cambiado la forma de almacenamiento en las clases controladoras cambiando los arrays por diccionarios para mejorar la eficiencia de accesos a los datos.
    - [4fd7672](https://github.com/cr13/RecetaCoctel/commit/4fd76723d8bc75f94d135fc44a358d5cae57c417)
- Debido a la mejora anterior se han tenido que modificar los métodos relacionados.
    - [Consultar](https://github.com/cr13/RecetaCoctel/issues/5) receta.
    - [Añadir](https://github.com/cr13/RecetaCoctel/issues/6)
    - [Eliminar](https://github.com/cr13/RecetaCoctel/issues/8)
- Además se han tenido que corregir todos los test.

    Receta
    - [2215d1f](https://github.com/cr13/RecetaCoctel/commit/2215d1f1a5cd41bb5825e012fb20ca145383b162)
    
    Clase controladora de receta
        - Añadir una receta[8488955](https://github.com/cr13/RecetaCoctel/commit/8488955afc22ceb0efe83a11b6be3a64d9fdb2d9)
        - Búsqueda por titulo [9cc9036](https://github.com/cr13/RecetaCoctel/commit/9cc9036ed153fc032520e32a709f87c241ea9471)
    
    Ingredientes
        - [2215d1f ](https://github.com/cr13/RecetaCoctel/commit/8af3cd95097fbeabca1ba40becba7b512bb76bf4#diff-944456afa8b87a27520cc9bb37b45391c6c68777cbd9f48e3dd062a32dcd7490)

    Clase controladora de ingredientes
    - [98efc94 ](https://github.com/cr13/RecetaCoctel/commit/98efc9427a050e118167b255ea6dc494b9107006)

    Test para probar las rutas
    - Ver de forma desglosada [aquí](https://cr13.github.io/RecetaCoctel/diseñoTest.html#testapi)
    
- Se ha actualizado el [fichero](https://github.com/cr13/RecetaCoctel/commit/c8a2305dbd193556e6391ffd36aa76fa3ae425c8) de Travis para quitar las versiones innecesarias y dejar solo las importantes, de esta forma se consumen menos créditos Travis.
- Se han eliminado los comentarios del fichero [Dockerfile](https://github.com/cr13/RecetaCoctel/issues/31)
- Se ha añadido una clase para las [Excepciones](https://github.com/cr13/RecetaCoctel/issues/29)



### Documentación

1. [Configuración del repositorio.](./doc/doc_H0.md)
2. [Descripción del problema](./doc/desc_prob.md)
3. [Definición de la arquitectura elegida.](https://cr13.github.io/RecetaCoctel/)
4. [Planificación del proyecto (ROADMAP)](https://cr13.github.io/RecetaCoctel/Roadmap.html)
5. [Historias de usuario](https://cr13.github.io/RecetaCoctel/hu.html)
6. [Clases desarrolladas.](https://cr13.github.io/RecetaCoctel/clases_desarrolladas.html)
7. [Elección y justificación de biblioteca de aserciones y sistema de pruebas.](https://cr13.github.io/RecetaCoctel/aserciones_sis_pruebas.html)
8. [Gestor de tareas](https://cr13.github.io/RecetaCoctel/aserciones_sis_pruebas.html#item3)
9. [Elección correcta, justificada del contenedor base y Dockerfile desarrollado](https://cr13.github.io/RecetaCoctel/contenedor.html)
10. [Subida a Docker Hub](https://cr13.github.io/RecetaCoctel/docker_hub.html)
11. [Uso de GitHub Container Registry](https://cr13.github.io/RecetaCoctel/githubcontainerregistry.html)
12. [Sistemas de Integración Continua](https://cr13.github.io/RecetaCoctel/ci.html)
