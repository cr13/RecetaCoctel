var receta = require("./Receta");
// var ingrediente = require("./Ingrediente");


class ControllerReceta {
    constructor() {
        this.recetas = {}; 
    }

    getRecetas() {
        return this.recetas;
    }

    addReceta(receta) {
        this.recetas.push(receta);
    }

    changeReceta(receta, receta_new) {
        
    }

   
}

module.exports = ControllerReceta;