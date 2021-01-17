
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


module.exports = router;