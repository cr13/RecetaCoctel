# RecetaCoctel

Proyecto para la asignatura de Cloud Computing I 

## Arquitectura

Para la resolución del problema descrito anteriormente, se va optar por utilizar una arquitectura de microservicios, el motivo de su elección ha sido porque ***se necestia que la aplicación sea accesible para un gran número de usuarios, por lo tanto esta arquitectura es la mejor para resolver grandes volumenes de peticiones***, además de los beneficios que nos aporta dicha arquitectura, tales como:
- Modularidad: Permite dividir el proyecto en varios microservicios, en el caso de fallo de alguno de ellos no afectaría al resto.
- Versatilidad: podemos usar diferentes lenguajes de programación
- Escalabilidad, ya que se podrían desarrollar e incorporar más microservicios sin que afecte a los existentes
- Facilita el mantenimiento de cada uno de ellos por separado.
- Reutilización de funcionalidades típicas que ya hayan sido desarrolladas.

## Lenguaje

Este proyecto se va a realizar en NodeJS, utilizando el framework node express. El motivo de su elección se ha dado tras valorar otras opciones como escala, go o python, visto que los demás compañeros han optado por estas opciones según comentaron en clase, he decido hacer algo diferente y por eso la elección de NodeJS.

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

Se ha seleccionado **jest** para saber más [aquí.](https://cr13.github.io/RecetaCoctel/aserciones_sis_pruebas.html)

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