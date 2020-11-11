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
        this.delReceta(receta)
        this.addReceta(receta_new);
    }

    delReceta(receta) {
        let pos_receta = this.recetas.indexOf(receta);
        this.recetas.splice(pos, 1);
    }
   
}

module.exports = ControllerReceta;