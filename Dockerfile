#Imagen y versión que usaremos de base
 FROM alpine:latest

# Indica el autor de la imagen y repositorde  dockerhub
LABEL maintainer="Cristobal <cr13@correo.ugr.es>" \
    org.opencontainers.image.source="https://hub.docker.com/repository/docker/cr13/recetacoctel"
   
#Creamos el directorio de trabajo
WORKDIR /app/test

# Copia del package.json y el package-lock.json
# el código y archivo de configuración del gestor de tareas
COPY ["package*.json", "Gruntfile.js",".jshintrc", "./"]

# Instalamos NodeJS, npm y grunt-cli
# Se crea grupo y usuario sin previlegios
RUN apk add --no-cache nodejs npm \
    && npm install \
    && npm install -g grunt-cli \
    && addgroup -g 1000 node \
    && adduser -u 1005 -G node -s /bin/sh -D cr13 \ 
    && mkdir -p /app/node_modules

#Se selecciona el usuario a utilizar
USER cr13

# Registramos node_modules en el path para que localize las dependencias
ENV PATH=/node_modules/.bin:$PATH

# Ejecuta grunt para los tests
CMD ["grunt","test"]