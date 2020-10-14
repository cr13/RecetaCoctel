# RecetaCoctel

Proyecto para la asignatura de Cloud Computing I 

Para la correcta configuración de github se han realizado los pasos indicados en la [documentación del hito0](https://github.com/cr13/RecetaCoctel/blob/main/doc/doc_H0.md)

## Descripción del problema

A las personas poco bebedoras o a las que les gusta cambiar, les suergen problemas de que no saben que ingredientes son los necesarios para realizar el coctel. Además, muchas veces se quiere buscar algo que probaste y no recuerdas el nombre. 

Para solucionarlo, este proyecto quiere unificar todo lo que se puede encontrar en la red y mostras un simple buscardor en el cual pongas tu coctel y te muestre los ingredientes o un nivel mas avanzado pongas algunos ingredientes y muestres el nombre del coctel si existe. Para llevar a cabo este proyecto se necesitara una 
API la cual nos devolvera los ingredientes del coctel buscado. En principio no se necesitaria registro ni nada de autentificación por parte de los usuarios, en caso de querer crear perfiles de usuarios, se estudiara que tipo de base de datos se adaptaria mejor al proyecto. 

## Arquitectura

En el proyecto nos vamos a basar en una arquitectura basada en microservicios, vamos a intentar implementar varios microservicios. En principio vamos a utilizar un microservicio para interactuar con la API y otro para el forntend. Además se van a implementar un microservicio de log y el microservicio de configuración remota.