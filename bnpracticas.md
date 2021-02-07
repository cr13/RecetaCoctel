---
layout: default
title: BuenasPracticas
---

###### [Inicio](./) | [Roadmap](./Roadmap.html) | [HU](./hu.html) | [Clases](./clases_desarrolladas) | [Tools Test](./aserciones_sis_pruebas.html) | [Contenedor](./contenedor.html) | [Docker Hub](./docker_hub.html) | [GitHubContainerRegistry](./githubcontainerregistry.html) | [CI](./ci.html) | [Framework API](./frameworkAPI.html) | [Diseño API](./diseñoAPI.html) | [Diseño Test](./diseñoTest.html) | [Despliegue](./heroku.html)
  


## Uso de buenas prácticas: configuración distribuida, logs.

Para hacer uso de las buenas pŕacticas, se ha añadido el servidor de **configuración distribuida** [etcd3](https://computingforgeeks.com/how-to-install-etcd-on-ubuntu-18-04-ubuntu-16-04/).

Es muy fácil de utilizar, una vez instalado podemos verificar su estado con:

```bash

# Checkeamos el estado del servicio
sudo systemctl  status etcd.service

# El servicio se lanza en el puerto 2379 de localhost
ss -tunelp | grep 2379

etcdctl member list

```

![etcd3 verificacion funcionamiento](https://github.com/cr13/EjerciciosCC-20-21/blob/main/img/t6/etcd3_verifiacion.png)

No olvidar realizar el export para que funcione correctamente el cliente.

```bash

export ETCDCTL_API=3

```

Vamos a almacenar el puerto donde vamos a ejecutar el servicio. Para ello:

```bash

etcdctl put RecetaAppPort 3002


```

Ahora debemos cargarlo en nuestra [app.js](https://github.com/cr13/RecetaCoctel/commit/270cfad4d995983f034cb934878301295cab9a4e#diff-e07d531ac040ce3f40e0ce632ac2a059d7cd60f20e61f78268ac3be015b3b28f).


Para la **configuración de los logs** se ha utilizado [Morgan](https://www.npmjs.com/package/morgan) que es Middleware para registrar las solicitudes HTTP y una herramienta para facilitar el desarrollo de la aplicación ([Nodemon](https://www.npmjs.com/package/nodemon)).

**Morgan** es muy sencillo de utilizar. Una vez instalado en app.js debemos cargarlo con:

```bash
const morgan = require('morgan');
```
y para su configuración de salida tenemos varios formatos (skip, stream, combined, common, dev, short, tiny).

Para su utilización debemos crear el middelware, para ello en el app.js añadimos:

```bash
    app.use(morgan('combined'))
```

**Nodemon** se ha utilizado para no tener que parar el servicio mientras realizamos modificaciones, es decir, al realizar algún cambio en el código esta herramienta lo detecta y lo actualiza.

Por último, aunque no se aprecia porque solo tengo un fichero de rutas, la idea es crear un fichero por cada controlador de forma que el app.js quedaría de la siguiente forma:

```bash
    app.use(routeRecetas);
    app.use(routeIngredientes);
    app.use(routeUsuarios);
```
