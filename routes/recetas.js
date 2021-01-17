
const { Router } = require('express');
const router = Router();
const Receta = require("../src/Receta");
const Ingrediente = require("../src/Ingrediente");
const ControllerReceta = require("../src/ControllerReceta");

let controllerRecetas = new ControllerReceta();


router.get("/recetas", (req, res) => {
    let data = controllerRecetas.getRecetas();
    if (Object.keys(data).length === 0){
        data = "No existe ninguna receta en estos momentos"
    }
    res.status(200);
    res.header("Content-Type", "application/json");
    res.json(data);
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


router.post('/recetas/add', (req, res) => {
    body = req.body;
    try {
        receta_new = new Receta(body.id_receta, body.titulo, body.instrucciones, body.duracion, body.dificultad, body.comensales, body.ingredientes);
        controllerRecetas.addReceta(receta_new);
        res.status(201);
        res.send({
            message: "Receta insertada",
        });
    } catch (error) {
            res.status(409);
            res.header("Content-Type", "application/json");
            res.json({ Error: error });
    }
});

router.delete('/recetas/del/:id_receta', (req, res) => {
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
