---
layout: default
title: Roadmap
---

##### [Inicio](./) | [Roadmap](./Roadmap.html) | [HU](./hu.html) | [Tools Test](./aserciones_sis_pruebas.html)


# Planificación del proyecto
<!-- {: .no_toc }

<details open markdown="block">
  <summary>
    Tabla de contenidos
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details> -->


La planificación definida para este proyecto va estar compuesta por los siguientes hitos (aunque conforme se vaya desarrollando el proyecto podrían salir nuevos hitos.):


## Hito 1: Definición de entidades y sus métodos

El objetivo de este hito será definir las entidades principales de una receta y de un ingrediente, ya que una receta estará compuesta de uno o más ingredientes. También se definirán los métodos para gestionar la receta e ingrediente. Además se definirá un método para obtener una receta por titulo/nombre y otro para que los usuarios puedan dar una valoración a la receta.

**Historias de Usuario**

* [HU - Definir la entidad receta](https://github.com/cr13/RecetaCoctel/issues/22)
* [HU - Definir la entidad Ingrediente](https://github.com/cr13/RecetaCoctel/issues/21)
* [HU - Definir la entidad Valoración](https://github.com/cr13/RecetaCoctel/issues/25)
* [HU - Insertar un ingrediente](https://github.com/cr13/RecetaCoctel/issues/24)
* [HU - Insertar una receta](https://github.com/cr13/RecetaCoctel/issues/6)
* [HU - Modificación de receta](https://github.com/cr13/RecetaCoctel/issues/7)
* [HU - Eliminar Receta](https://github.com/cr13/RecetaCoctel/issues/8)
* [HU - Obtener Receta](https://github.com/cr13/RecetaCoctel/issues/5)
* [HU - Valorar recetas](https://github.com/cr13/RecetaCoctel/issues/9)

El **MPV**  para este hito serán las clases con sus métodos, y sin mas funcionalidad que el de ser sintácticamente correctos.

## Ranking recetas

En este hito, el objetivo sera mostrar las 10 recetas mejor valoradas y también se podrán mostrar las recetas más recientes registradas en el sistema. 

**Historia de Usuario**

* [HU - Mostar un top 10 de las mejores recetas](https://github.com/cr13/RecetaCoctel/issues/10)
* [HU - Mostrar recetas más recientes](https://github.com/cr13/RecetaCoctel/issues/11)

El **MPV**  para este hito será la clase con las dos funcionalidades descritas.

## Hito 2: Test

El objetivo de este hito será la realización de test para verificar el funcionamiento correcto de todas las funcionalidades creadas en los hitos anteriores.

* [Desarrollo de test](https://github.com/cr13/RecetaCoctel/issues/15)


El **MPV**  para este hito serán la comprobación de las clases y sus métodos. Deben de pasar una serie de test con éxito.

## Hito 3: Realizar los test en un contenedor

El objetivo de este hito será la realización de los test del hito anterior en un contenedor utilizando docker.


[UP](./Roadmap.html)