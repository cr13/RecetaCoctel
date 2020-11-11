var ingrediente = require("./Ingrediente");


class ControllerIngrediente {
    constructor() {
        this.Ingredientes = {};
    }

    addIngrediente(nombre, descripcion, tipo) {
        let ingrediente = new ingrediente.Ingrediente(nombre, descripcion, tipo);
    }

}

module.exports = ControllerIngrediente;