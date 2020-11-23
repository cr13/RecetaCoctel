var ingrediente = require("./Ingrediente");


class ControllerIngrediente {
    constructor() {
        this.ingredientes = [];
    }

    //Función para añadir un ingrediente
    addIngrediente(ing) {
        this.ingredientes.push(ing);
    }

    //Función para retornar la lista de ingredientes
    getIngs() {
        return this.ingredientes;
    }

}

module.exports = ControllerIngrediente;