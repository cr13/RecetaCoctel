const express = require('express');
const app = express();
var path = require('path');
// var favicon = require('serve-favicon');
const morgan = require('morgan');
const dataRoutes = require('./routes/recetas');

const { Etcd3 } = require('etcd3');

const client = new Etcd3();

let port = process.env.PORT || 3010;
app.set('json spaces', 2);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


async function getPort() {
  const port = await client.get('RecetaAppPort');
  return port;
}


//Routes
app.use(dataRoutes);

(async () => {
  port = await getPort();
})().then(() => {

  app.listen(port, function () {
    console.log(`RecetasCoctel, escuchando en http://localhost:${port}/recetas`);
  });

}).catch(() => {
  
  app.listen(port, function () {
    console.log(`RecetasCoctel, escuchando en http://localhost:${port}/recetas`);
  });
});

module.exports = app;
