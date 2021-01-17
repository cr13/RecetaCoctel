
const { Router } = require('express');
const router = Router();
const Receta = require("../src/Receta");
const Ingrediente = require("../src/Ingrediente");
const ControllerReceta = require("../src/ControllerReceta");

let controllerRecetas = new ControllerReceta();


router.get("/recetas", (req, res) => {
    let data = controllerRecetas.getRecetas();
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

module.exports = router;