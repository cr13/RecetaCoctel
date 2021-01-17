---
layout: default
---

###### [Inicio](./) | [Roadmap](./Roadmap.html) | [HU](./hu.html) | [Clases](./clases_desarrolladas) | [Tools Test](./aserciones_sis_pruebas.html) | [Contenedor](./contenedor.html) | [Docker Hub](./docker_hub.html) | [GitHubContainerRegistry](./githubcontainerregistry.html) | [CI](./ci.html) | (Framework API)[./frameworkAPI.html]

# Bienvenido al buscador de recetas

## Descripción

RecetaCotel es un proyecto pensado principalmente para poder buscar recetas de cocteles, pero que en un futuro podría escalar y incluir diferentes categorías con sus correspondiente recetas.
Algunas de sus funciones se van a centrar en poder buscar receta de cocteles de forma anónima, poder dar una valoración en modo identificado.

## Arquitectura

Para la resolución del problema descrito anteriormente, se va optar por utilizar una arquitectura de microservicios, el motivo de su elección ha sido porque *se necesita que la aplicación sea accesible para un gran número de usuarios, por lo tanto esta arquitectura es la mejor para resolver grandes volúmenes de peticiones*, además de los beneficios que nos aporta dicha arquitectura, tales como:
- Modularidad: Permite dividir el proyecto en varios microservicios, en el caso de fallo de alguno de ellos no afectaría al resto.
- Versatilidad: podemos usar diferentes lenguajes de programación
- Escalabilidad, ya que se podrían desarrollar e incorporar más microservicios sin que afecte a los existentes
- Facilita el mantenimiento de cada uno de ellos por separado.
- Reutilización de funcionalidades típicas que ya hayan sido desarrolladas.

## Lenguaje

Este proyecto se va a realizar en NodeJS, utilizando el framework node express. El motivo de su elección se ha dado tras valorar otras opciones como escala, go o python, visto que los demás compañeros han optado por estas opciones según comentaron en clase, he decido hacer algo diferente y por eso la elección de NodeJS.

<!-- En el proyecto nos vamos a basar en una arquitectura basada en microservicios. Los cuales se han desglosado de la siguiente manera:


- Recetas: Microservicio que se va encargar de gestionar las peticiones de la API consultando su base de datos. En caso de no tener registros de la petición ofertada, se estudiará la posibilidad de consultar en alguna API externa existente.

- Usuarios: Microservicio que se va encargar de gestionar los perfiles de los usuarios, en ello se incluirá el logeo inicial siempre y cuando se quiera realizar algún tipo de interacción con la valoraciones de las recetas o si se quiere introducir, editar o eliminar recetas propias.

- Valoraciones: Microservicio que devolverá todas las valoraciones existentes de la receta seleccionada.

- Logs: Este microservicio va a contener todos los registros identificados por estados (avisos, errores, verificaciones) de las diferentes acciones que se realicien en los microservicios anteriores.

- Configuración: Microservicio para la gestión y configuración de los diferentes microservicios de forma remota.
 -->
<!-- A continuación podemos ver el diagrama de la arquitectura:

![Diagrama de la arquitectura](img/diagrama_RC.png)
 -->
<!-- Toda la comunicación entre los microservicios y la APi GateWay se realizarán mediante una API Rest. -->
