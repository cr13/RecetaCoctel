#Imagen y versión que usaremos de base
 FROM alpine:latest
# FROM node:15.2.1-alpine3.10
# FROM node:15


# Indica el autor de la imagen, repositorio github y dockerhub
LABEL maintainer="Cristobal <cr13@correo.ugr.es>" \
    com.recetacoctel.repository="https://github.com/cr13/RecetaCoctel/"
LABEL org.opencontainers.image.source https://hub.docker.com/repository/docker/cr13/recetacoctel

#Creamos el directorio de trabajo
WORKDIR /app/test

# Copia del package.json y el package-lock.json
COPY package*.json ./

# Instalamos NodeJS, npm y grunt-cli
RUN apk add --no-cache nodejs npm \
    && npm install \
    && npm install -g grunt-cli \
    && addgroup -g 1000 node \
    && adduser -u 1000 -G node -s /bin/sh -D cr13 

# RUN npm install -g grunt-cli 

# Se añade grupo de usuario llamado node y un usuario que pertenece
# al grupo node llamado cr13
# RUN addgroup -g 1000 node \
#     && adduser -u 1000 -G node -s /bin/sh -D cr13 
# RUN adduser -u 1001 -G node -s /bin/sh -D cr13 

USER cr13
# USER node
# Se copia el código y archivo de configuración del gestor de tareas
COPY Gruntfile.js ./
COPY .jshintrc ./


# Ejecuta grunt para los tests
CMD ["grunt","test"]