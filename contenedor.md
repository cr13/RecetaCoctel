---
layout: default
title: Contenedor
---

##### [Inicio](./) | [Roadmap](./Roadmap.html) | [HU](./hu.html) | [Tools Test](./aserciones_sis_pruebas.html) | [Contenedor](./contenedor.html)

## Elección correcta y justificada del contenedor base

Para la elección del contenedor base, se ha tenido en cuenta todo lo aprendido en los [ejercicios](https://github.com/cr13/EjerciciosCC-20-21/blob/main/tema3.md) del temario, ya que en ellos se han instalado y aprendido a valorar varias imágenes base. También se han tenido en cuenta las buenas prácticas, donde aconsejan que la imagen debe ser ligera, con el número mínimo de capas posible y a ser posible usar una imagen de un proveedor de confianza ya que nos garantiza un nivel alto de seguridad, mantenibilidad y seguramente sera lo más liviana posible en cuanto a espacio.

Durante los ejercicio, al realizar los pequeños proyectos en NodeJs, me tope con una imagen oficial de NodeJS instalada en la imagen alpine que es la más liviana que existe hasta el momento. Y puesto que este punto es un poco de investigación me he encontrado con otro buen exponente [Google Distroless Docker Images](https://github.com/GoogleContainerTools/distroless) que son imágenes que solo contienen la aplicación y sus dependencias de tiempo de ejecución. Esta version se ha descartado porque realiza una construcción en dos fases, lo cual se hablo en clase que no valía para nuestro proyecto. Aún asi se va a probar y comparar con las imágenes alpine, node:15.2.1-alpine3.10 y node:15.

A continuación se muestra una captura de las imágenes que vamos a probar.

<!-- ![images docker](https://github.com/cr13/RecetaCoctel/blob/main/doc/img/h3/docker_images.png) -->

![images docker](img/docker_images.png)


Como se puede observar en la ilustración, la prueba de node:15 es la que más ocupa por lo que ya estaríamos incumpliendo las buenas practicas. Entonces nos quedarían nodealpine y alpine que ocupan prácticamente lo mismo. 
La prueba de google no es que ocupe mucho mas que las dos que vamos a elegir, pero no esta disponible en la última versión de node y se construye en dos fases aunque en la captura no aparece, para construir la imagen googlecontainernode14 se hace a partir de una imagen llamada gcr.io/distroless/nodejs con un tamaño similar (119MB).

Después de este cribado que se ha realizado nos queda nodealpine15 y alpine. Ahora vamos a comprobar el numero de capas que tiene cada una: 

- alpine --> 7 capas
- node:15.2.1-alpine3.10  --> 10 capas
- node:15 --> 14 capas
- googlecontainernode14 --> 5 capas

Se va intentar mejorar el Dockerfile para intentar reducir el número de capas, pero en esta primera versión realizada, la mejor imagen en cuanto a capas sería googlecontainernode14, seguida de alpine que sería la mejor opción en cuanto a buenas prácticas.

### Ref seguidas

- [Buenas prácticas construyendo imágenes Docker](https://medium.com/@serrodcal/buenas-pr%C3%A1cticas-construyendo-im%C3%A1genes-docker-8a4f14f7ad1d)
- [Buenas prácticas para escribir un Dockerfile](https://blog.arima.eu/es/2020/04/21/buenas-practicas-para-escribir-un-dockerfile.html)


