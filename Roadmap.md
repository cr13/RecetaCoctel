---
layout: default
title: Roadmap
---

###### [Inicio](./) | [Roadmap](./Roadmap.html) | [HU](./hu.html) | [Tools Test](./aserciones_sis_pruebas.html) | [Contenedor](./contenedor.html) | [GitHubContainerRegistry](./githubcontainerregistry.html)


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

El **PMV**  para este hito serán las clases con sus métodos, y sin mas funcionalidad que el de ser sintácticamente correctos.

## Hito 2: Ranking recetas

En este hito, el objetivo sera mostrar las 10 recetas mejor valoradas y también se podrán mostrar las recetas más recientes registradas en el sistema. 

**Historia de Usuario**

* [HU - Mostar un top 10 de las mejores recetas](https://github.com/cr13/RecetaCoctel/issues/10)
* [HU - Mostrar recetas más recientes](https://github.com/cr13/RecetaCoctel/issues/11)

El **PMV**  para este hito será la clase con las dos funcionalidades descritas.


[UP](./Roadmap.html)