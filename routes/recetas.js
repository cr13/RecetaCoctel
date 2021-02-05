
const { Router } = require('express');
const router = Router();
const Receta = require("../src/Receta");
const Ingrediente = require("../src/Ingrediente");
const ControllerReceta = require("../src/ControllerReceta");
const controllerIng = require("../src/ControllerIngrediente");

let listIngredientes = new controllerIng();
let controllerRecetas = new ControllerReceta();


router.get("/recetas", (req, res) => {
    try {
        let data = controllerRecetas.getRecetas();

        res.status(200);
        res.header("Content-Type", "application/json");
        res.json(data);
    } catch (exception) {
        res.status(404);
        res.header("Content-Type", "application/json");
        res.json({ Error: exception });
    }

});

router.get("/recetas/:title", (req, res) => {
    try {
        let data = controllerRecetas.getRecetaByTitle(req.params.title);
        res.status(200);
        res.header("Content-Type", "application/json");
        res.json(data);
    } catch (exception) {
        res.status(404);
        res.header("Content-Type", "application/json");
        res.json({ Error: exception });
    }
});


router.post('/recetas/', (req, res) => {
    body = req.body;
    try {
        body.ingredientes.forEach(element => {
            // id_ing, nombre, descripcion, tipo, receta
            let ingredientenew = new Ingrediente(element.id_ing, element.nombre, element.descripcion, element.tipo, element.recetas);
            listIngredientes.addIngrediente(ingredientenew);
        });

        let receta_new = new Receta(body.id_receta, body.titulo, body.instrucciones, body.duracion, body.dificultad, body.comensales, listIngredientes.getIngs());
        controllerRecetas.addReceta(receta_new);
        res.status(201);
        res.send({
            message: "Receta insertada",
        });
    } catch (error) {
            res.status(400);
            res.header("Content-Type", "application/json");
            res.json({ Error: error });
    }
});

router.delete('/recetas/:id_receta', (req, res) => {
    try {
        controllerRecetas.delReceta(req.params.id_receta);
        res.status(200);
        res.send({
            message: "Receta eliminada correctamente",
        });
    } catch (error) {
        res.status(404);
        res.header("Content-Type", "application/json");
        res.json({ Error: error });
    }
});

module.exports = router;
