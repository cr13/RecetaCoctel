var receta = require("./Receta");
// var ingrediente = require("./Ingrediente");


class ControllerReceta {
    constructor() {
        this.recetas = {}; 
    }

    getRecetas() {
        return this.recetas;
    }
   
}

module.exports = ControllerReceta;