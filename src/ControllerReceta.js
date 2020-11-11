var receta = require("./Receta");
// var ingrediente = require("./Ingrediente");


class ControllerReceta {
    constructor() {
        this.Recetas = {}; 
    }

    addReceta(titulo, instrucciones, ingredientes) {
        let receta_uno = new receta.Receta(titulo, instrucciones, ingredientes);
    }
   
}

module.exports = ControllerReceta;