var receta = require("./Receta");
// var ingrediente = require("./Ingrediente");


class ControllerReceta {
    constructor() {
        this.recetas = {}; 
    }

    getRecetas() {
        return this.recetas;
    }

    addReceta(titulo, instrucciones, ingredientes) {
        let receta_uno = new receta.Receta(titulo, instrucciones, ingredientes);
    }
   
}

module.exports = ControllerReceta;