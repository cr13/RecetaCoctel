
var receta = require("./Receta");
var val_receta = require("./ValoracionReceta");


class ControllerValoracion {
    constructor() {
        this.valoraciones_recetas = [];
    }

    //Función para añadir valoraciones a las recetas
    addValoracionReceta(val) {
        this.valoraciones_recetas.push(val);
    }

}

module.exports = ControllerValoracion;