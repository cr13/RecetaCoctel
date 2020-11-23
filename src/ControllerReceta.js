var receta = require("./Receta");

class ControllerReceta {
    constructor() {
        this.recetas = []; 
    }

    getRecetas() {
        return this.recetas;
    }

    addReceta(receta) {
        this.recetas.push(receta);
    }

    changeReceta(receta, receta_new) {
        this.delReceta(receta);
        this.addReceta(receta_new);
    }

    delReceta(receta) {
        let pos_receta = this.recetas.indexOf(receta);
        this.recetas.splice(pos_receta, 1);
    }
    
    getRecetaByTitle(recetas, title) {
        let result = [];
        for (let index = 0; index < recetas.length; index++) {
            let til = recetas[index].titulo;
            if (til.toLowerCase().indexOf(title.toLowerCase()) > -1) {
                result.push(recetas[index]);
            }
        }
        return result;
    }

}

module.exports = ControllerReceta;