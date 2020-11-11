# RecetaCoctel

Proyecto para la asignatura de Cloud Computing I 

## Arquitectura

Para la resolución del problema descrito anteriormente, se va optar por utilizar una arquitectura de microservicios, el motivo de su elección ha sido por los beneficios que nos aporta dicha arquitectura, dado que al dividir el proyecto en varios microservicios en el caso de fallo de alguno de ellos no afectaría al resto. También aporta escalabilidad, ya que se podrían desarrollar e incorporar más microservicios sin que afecte a los existentes, además de facilitar el mantenimiento de cada uno de ellos por separado. 

## Lenguaje

Este proyecto se va a realizar en NodeJS, utilizando el framework node express. El motivo de su elección se ha dado tras valorar otras opciones como escala, go o python, visto que los demás compañeros han optado por estas opciones según comentaron en clase, he decido hacer algo diferente y por eso la elección de NodeJS.

## Clases desarrolladas

Hasta el momento se han desarrollado las siguientes clases 

- [Receta](https://github.com/cr13/RecetaCoctel/blob/main/src/Receta.js)
- [ControllerReceta](https://github.com/cr13/RecetaCoctel/blob/main/src/ControllerReceta.js)
- [Ingrediente](https://github.com/cr13/RecetaCoctel/blob/main/src/Ingrediente.js)
- [ControllerIngrediente](https://github.com/cr13/RecetaCoctel/blob/main/src/ControllerIngrediente.js)

![Verificación de las clases](https://github.com/cr13/RecetaCoctel/blob/main/doc/img/h1/verificacionclases.png)

## Planificación del proyecto (ROADMAP)

La planificación provisional hasta el momento se puede ver [aquí.](https://cr13.github.io/RecetaCoctel/Roadmap.html)

## Historias de usuario

Las historias de usuario definidas hasta el momento se puede ver [aquí.](https://cr13.github.io/RecetaCoctel/hu.html)
