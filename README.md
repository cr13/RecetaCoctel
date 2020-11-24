# RecetaCoctel

Proyecto para la asignatura de Cloud Computing I 

## Arquitectura

Para la resolución del problema descrito anteriormente, se va optar por utilizar una arquitectura de microservicios, el motivo de su elección ha sido porque *se necesita que la aplicación sea accesible para un gran número de usuarios, por lo tanto esta arquitectura es la mejor para resolver grandes volúmenes de peticiones*, además de los beneficios que nos aporta dicha arquitectura, tales como:
- Modularidad: Permite dividir el proyecto en varios microservicios, en el caso de fallo de alguno de ellos no afectaría al resto.
- Versatilidad: podemos usar diferentes lenguajes de programación
- Escalabilidad, ya que se podrían desarrollar e incorporar más microservicios sin que afecte a los existentes
- Facilita el mantenimiento de cada uno de ellos por separado.
- Reutilización de funcionalidades típicas que ya hayan sido desarrolladas.

## Lenguaje

Este proyecto se va a realizar en NodeJS, utilizando el framework node express. El motivo de su elección se ha dado tras valorar otras opciones como escala, go o python, visto que los demás compañeros han optado por estas opciones según comentaron en clase, he decido hacer algo diferente y por eso la elección de NodeJS.

<a name="item1"></a>
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

## Avance del proyecto

Se han definido las HU como desarrollador, por ello, se ha reorganizado la asociación de cada clase con su HU correspondiente, además se han asociado las funciones que corresponde a cada HU por separado (evitando asociar múltiples HU a un solo commit). También se ha especificado la descripción de las entidades del proyecto en cada HU correspondiente.

Se han definido todas las clases necesarias para obtener un MVP, así como también se ha modificado el roadmap llamando de forma más significativa a las fases que en un principio asigne a cada MPV.

Para las [clases](https://github.com/cr13/RecetaCoctel#item1) desarrolladas, se han realizado algunos [test](https://github.com/cr13/RecetaCoctel/tree/main/src/test) de las más importantes, que son: [receta](https://github.com/cr13/RecetaCoctel/blob/main/src/test/receta.test.js), [ingrediente](https://github.com/cr13/RecetaCoctel/blob/main/src/test/ingredientes.test.js), las clases controladoras [receta](https://github.com/cr13/RecetaCoctel/blob/main/src/test/controller_receta.test.js) y de [ingrediente](https://github.com/cr13/RecetaCoctel/blob/main/src/test/controller_ingrediente.test.js).

## Elección correcta y justificada del contenedor base

Para la elección del contenedor base, se ha tenido en cuenta todo lo aprendido en los [ejercicios](https://github.com/cr13/EjerciciosCC-20-21/blob/main/tema3.md) del temario, ya que en ellos se han instalado y aprendido a valorar varias imágenes base. También se han tenido en cuenta las buenas prácticas, donde aconsejan que la imagen debe ser ligera, con el número mínimo de capas posible y a ser posible usar una imagen de un proveedor de confianza ya que nos garantiza un nivel alto de seguridad, mantenibilidad y seguramente sera lo más liviana posible en cuanto a espacio.

Durante los ejercicio, al realizar los pequeños proyectos en NodeJs, me tope con una imagen oficial de NodeJS instalada en la imagen alpine que es la más liviana que existe hasta el momento. Y puesto que este punto es un poco de investigación me he encontrado con otro buen exponente [Google Distroless Docker Images](https://github.com/GoogleContainerTools/distroless) que son imágenes que solo contienen la aplicación y sus dependencias de tiempo de ejecución. Esta version se ha descartado porque realiza una construcción en dos fases, lo cual se hablo en clase que no valía para nuestro proyecto.