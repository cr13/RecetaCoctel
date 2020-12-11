# RecetaCoctel

Proyecto para la asignatura de Cloud Computing I 

![Docker Cloud Build Status](https://img.shields.io/docker/cloud/build/cr13/recetacoctel)  [![Build Status](https://travis-ci.com/cr13/RecetaCoctel.svg?branch=main)](https://travis-ci.com/cr13/RecetaCoctel)



## [Descripción del problema](./doc/desc_prob.md)

## Arquitectura

Para la resolución del problema descrito anteriormente, se va optar por utilizar una arquitectura de microservicios, el motivo de su elección ha sido porque *se necesita que la aplicación sea accesible para un gran número de usuarios, por lo tanto esta arquitectura es la mejor para resolver grandes volúmenes de peticiones*, además de los beneficios que nos aporta dicha arquitectura, tales como:
- Modularidad: Permite dividir el proyecto en varios microservicios, en el caso de fallo de alguno de ellos no afectaría al resto.
- Versatilidad: podemos usar diferentes lenguajes de programación
- Escalabilidad, ya que se podrían desarrollar e incorporar más microservicios sin que afecte a los existentes
- Facilita el mantenimiento de cada uno de ellos por separado.
- Reutilización de funcionalidades típicas que ya hayan sido desarrolladas.

## Lenguaje

Este proyecto se va a realizar en NodeJS, utilizando el framework node express. El motivo de su elección se ha dado tras valorar otras opciones como escala, Go o python, visto que los demás compañeros han optado por estas opciones según comentaron en clase, he decido hacer algo diferente y por eso la elección de NodeJS.

<a name="ClasesDesarrolladas"></a>

## Clases desarrolladas

**Hasta el momento se han desarrollado las siguientes clases**

- [**Receta**](https://github.com/cr13/RecetaCoctel/blob/main/src/Receta.js)
- [**ControllerReceta**](https://github.com/cr13/RecetaCoctel/blob/main/src/ControllerReceta.js)
- [**Ingrediente**](https://github.com/cr13/RecetaCoctel/blob/main/src/Ingrediente.js)
- [**ControllerIngrediente**](https://github.com/cr13/RecetaCoctel/blob/main/src/ControllerIngrediente.js)
- [**ValoracionReceta**](https://github.com/cr13/RecetaCoctel/blob/main/src/ValoracionReceta.js)
- [**ControllerValoracion**](https://github.com/cr13/RecetaCoctel/blob/main/src/ControllerValoracion.js)
- [**ControllerRanking**](https://github.com/cr13/RecetaCoctel/blob/main/src/ControllerRanking.js)

![Verificación de las clases](https://github.com/cr13/RecetaCoctel/blob/main/doc/img/h1/verificacionclases.png)

## Planificación del proyecto (ROADMAP)

La planificación provisional hasta el momento se puede ver [aquí.](https://cr13.github.io/RecetaCoctel/Roadmap.html)

## Historias de usuario

Las historias de usuario definidas hasta el momento se puede ver [aquí.](https://cr13.github.io/RecetaCoctel/hu.html)

## Elección y justificación de biblioteca de aserciones y sistema de pruebas.

Se ha seleccionado **Jest** para saber más [aquí.](https://cr13.github.io/RecetaCoctel/aserciones_sis_pruebas.html)

## Gestor de tareas 

El gestor de tareas elegido ha sido **grunt**, ver justificación [aquí](https://cr13.github.io/RecetaCoctel/aserciones_sis_pruebas.html#item3)

## Instrucciones 

```bash

    # Instala gestor grunt.
    npm i -D grunt-cli

    # Instala las dependencias necesarias.
    grunt install   

    # Instalación limpia de las dependencias, ideal para integración continua.
    grunt ci        

    # Ejecuta tarea por defecto, en mi caso ejecuta los test y el plugin para comprobar sintaxis.
    grunt           

```

## Avance del proyecto

Se han definido las issues como desarrollador, para ello, se ha reorganizado la asociación de cada clase con su issue correspondiente, además se han asociado las funciones que corresponde a cada HU por separado (evitando asociar múltiples HU a un solo commit). También se ha especificado la descripción de las entidades del proyecto en cada HU correspondiente.

Se han definido todas las clases necesarias para obtener un PMV, así como también se ha modificado el roadmap llamando de forma más significativa a las fases que en un principio asigne a cada PMV.

Para las [clases](https://github.com/cr13/RecetaCoctel#ClasesDesarrolladas) desarrolladas, se han realizado algunos [test](https://github.com/cr13/RecetaCoctel/tree/main/src/test) de las más importantes, que son: [receta](https://github.com/cr13/RecetaCoctel/blob/main/src/test/receta.test.js), [ingrediente](https://github.com/cr13/RecetaCoctel/blob/main/src/test/ingredientes.test.js), las clases controladoras [receta](https://github.com/cr13/RecetaCoctel/blob/main/src/test/controller_receta.test.js) y de [ingrediente](https://github.com/cr13/RecetaCoctel/blob/main/src/test/controller_ingrediente.test.js).

## Elección correcta, justificada del contenedor base y Dockerfile desarrollado

La elección de la imagen base a sido **alpine**, ver justificación, pruebas realizadas y fichero [Dockerfile](https://github.com/cr13/RecetaCoctel/blob/main/Dockerfile) resultante [aquí](https://cr13.github.io/RecetaCoctel/contenedor.html)

### Instrucciones de construcción y ejecución

```bash

#Se construye la imagen 
docker build -t cr13/recetascoctel .

#Para ejecutarlo
docker run -t -v `pwd`:/app/test cr13/recetascoctel

```

## Subida a Docker Hub

Para poder utilizar Docker Hub, lo primero que hay que hacer es registrarse, una vez registrados hay que ir a Account Setting --> Linked Accounts y asociar nuestra cuenta de GitHub. Una vez hecho esto solo hay que crear el repositorio. (Ejemplo creación)[./doc/img/h3/createRepositorydockerhub.png]

A continuación dejo mi [Repositorio DockerHub](https://hub.docker.com/repository/docker/cr13/recetacoctel).

## Uso de GitHub Container Registry

La justificación de uso se puede ver [aquí](https://cr13.github.io/RecetaCoctel/githubcontainerregistry.html)

## Sistemas de Integración Continua

Se van a instalar dos sistemas de integración continua [Travis-ci](https://travis-ci.com/) y [CircleCI](https://circleci.com/). Existen otras alternativas como [Appveyor](https://www.appveyor.com/), [Jenkins](https://www.jenkins.io/), [Bamboo](https://www.atlassian.com/es/software/bamboo) entre otros.

Para la justificación de uso de los dos sistemas CI se puede consultar [aquí](https://cr13.github.io/RecetaCoctel/ci.html).