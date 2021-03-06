FROM alpine:latest

LABEL maintainer="Cristobal <cr13@correo.ugr.es>" \
    org.opencontainers.image.source="https://hub.docker.com/repository/docker/cr13/recetacoctel"

WORKDIR /app

RUN apk add --no-cache nodejs npm \
    && npm install -g grunt-cli \
    && addgroup -g 1000 node \
    && adduser -u 1000 -G node -s /bin/sh -D cr13 \ 
    && mkdir -p /app/node_modules \
    && mkdir -p /app/src \
    && mkdir -p /app/views \
    && mkdir -p /app/public \
    && mkdir -p /app/routes \
    && chown -R cr13:node /app


USER cr13

COPY --chown=cr13:node ["package*.json", "Gruntfile.js",".jshintrc", "app.js", "./"]

COPY --chown=cr13:node ["src", "./src"]
COPY --chown=cr13:node ["routes", "./routes"]
COPY --chown=cr13:node ["public", "./public"]
COPY --chown=cr13:node ["views", "./views"]


RUN npm install grunt-cli && grunt install

ENV PATH=/node_modules/.bin:$PATH

CMD ["grunt","start"]
