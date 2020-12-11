---
layout: default
title: CI
---

###### [Inicio](./) | [Roadmap](./Roadmap.html) | [HU](./hu.html) | [Tools Test](./aserciones_sis_pruebas.html) | [Contenedor](./contenedor.html) | [GitHubContainerRegistry](./githubcontainerregistry.html) | [CI](./ci.html)


# Sistemas de integración continua

Para llevar a cabo la integración continua de mi proyecto, se va a probar [**Travis-ci**](./ci.html#travisci) y [**CircleCI**](./ci.html#circleci). 

<a name="travisci"></a>

### Travis-CI

En primer lugar vamos a utilizar **Travis-ci**, pero vamos a registrarnos en [travis-ci.com](https://travis-ci.com/) dado que [travis-ci.org](](https://travis-ci.org/) se ha utilizado en los [ejercicios](https://github.com/cr13/EjerciciosCC-20-21/blob/main/tema4.md) y que además va ha dejar de funcionar a final de este mes (12-2020).

Siguiendo las [instrucciones](https://travis-ci.com/getting_started), lo primero que vamos a realizar va ser activar los repositorios en los que queremos tener acceso desde travis. Da dos opciones:
- Todos los repositorios actuales y futuros
- Seleccionar los repositorios.

![Habilitar acceso a repositorios Github](./img/activar_repos_travis.png)

Yo he elegido la segunda opción, para elegir el repositorio solo el repositorio del proyecto al que quiero dar acceso a travis.

Entonces, seleccionamos nuestro repositorio del proyecto y pasamos al siguiente paso que es añadir el fichero de configuración de travis llamado **.travis.yml**, el cuál vamos a explicar a continuación.

En primer lugar vamos a especificar el lenguaje de nuestro proyecto. Con esto ya sería suficiente para que travis realice su cometido automáticamente.

```bash

language: node_js

``` 
A partir de aquí ya son todo configuraciones que se han añadido, por ejemplo, aunque por defecto las notificaciones vienen desactivadas, he añadido la sentencia para ver que si en vez de poner false ponemos nuestro correo nos van a llegar las notificaciones de los test realizado.

```bash

notifications:
  email: false   # Ej:  email: cr13@correo.ugr.es 
``` 
En la siguiente configuración vamos a indicar las versiones de NodeJS en las que vamos a probar nuestro proyecto. He añadido 4 formas diferentes de indicar las versiones, que son:

```bash

node_js:
  - node        # La versión actual más estable
  - lts/*       # La versión actual más estable con soporte a largo plazo
  - "v15.0.1"   # Se especifica una versión en concreto, la 15.0.1
  - "12"        # Se especifica una versión, que por defecto sería la versión 12 más actual estable lst 

``` 
Ahora vamos a especificar que nos instale nuestro gestor de tareas.

```bash

before_install:
  - npm install grunt-cli

``` 
Este paso no es necesario, pero en mi proyecto para las versiones lts, me solicita realizar npm install para continuar (motivo necesita instalar la dependencia node express). Por ello, ejecutamos la tarea grunt install la cuál se va encargar de realizar un npm install, tarea especificada en el gruntfile del proyecto.

```bash
install:
  - grunt install
``` 
Y por último lanzamos los test a través del gestor de tareas.

```bash

script: grunt test

``` 

Para finalizar nuestra instalación de integración continua con travis vamos añadir en el README del repositorio el badge de estado con la siguiente linea markdown. Ver en [ejercicios](https://github.com/cr13/EjerciciosCC-20-21/blob/main/tema4.md) tema 4 como localizar el enlace. 

```bash

[![Build Status](https://travis-ci.com/cr13/RecetaCoctel.svg?branch=main)](https://travis-ci.com/cr13/RecetaCoctel)


``` 

Se deja [documentación](https://docs.travis-ci.com/user/migrate/open-source-repository-migration) para migrar los repositorios a travis-ci.com

REF. seguidas:

[Tutorial de Travis + NodeJS + grunt](https://sites.google.com/site/practicadesarrollosoft/temario/continuous-integration/ci---travis)

[Documentación travis para javascript con NodeJS](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/)

[Configuración de travis.yml](https://nodejs.medium.com/choosing-the-node-js-versions-for-your-ci-tests-hint-use-lts-89b67f68d7ca)

[Grunt en Travis](https://gist.github.com/travishorn/5869188)

[Notificaciones](https://docs.travis-ci.com/user/notifications/)



<a name="circleci"></a>

### CircleCI