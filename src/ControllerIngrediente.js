var ingrediente = require("./Ingrediente");


class ControllerIngrediente {
    constructor() {
        this.ingredientes = {};
    }

    //Función para añadir un ingrediente
    addIngrediente(ing) {
        this.ingredientes.push(ing);
    }

}

module.exports = ControllerIngrediente;