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

    
    delReceta(receta) {
        let pos = this.historicalEventsList.indexOf(historicalEvent);
        this.historicalEventsList.splice(pos, 1);
    }
   
}

module.exports = ControllerReceta;