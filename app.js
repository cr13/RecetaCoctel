const express = require('express');
const app = express();
// const port = 3001
const morgan = require('morgan');
const dataRoutes = require('./routes/recetas');

const { Etcd3 } = require('etcd3');

const client = new Etcd3();

let port = process.env.port || 3010;
app.set('json spaces', 2);

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
