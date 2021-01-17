const Receta = require("./Receta");
const Val_receta = require("./ValoracionReceta");
const Excepcion = require("./Exception");


class ControllerReceta {
    constructor() {
        this.recetas = {}; 
        this.valoraciones_recetas= {}
    }

    getRecetas() {
        return this.recetas;
    }

    addReceta(receta) {
        if (receta instanceof Receta) {
            if (!(receta.get_id() in this.recetas)) {
                this.recetas[receta.get_id()] = receta;
            }
            else {
                throw new Excepcion ("Error", "El id de receta ya existe");
            }
        }
        else {
            throw new Excepcion("Error", "Los parámetros insertados no coinciden con los tipos requeridos");
        }
    }

    changeReceta(receta, receta_new) {
        this.delReceta(receta);
        this.addReceta(receta_new);
    }

    delReceta(receta) {
        let id_receta = receta.get_id();
        if (id_receta in this.recetas) {
            delete this.recetas[id_receta];
        }
        else {         
            throw new Exception("Info", "La receta no existe en el sistema");
        }
        
    }
    
    getRecetaByTitle(til) {
        let title = til;
        if (!(typeof title === 'string')) {
            title = String(til) 
        } 

        let recetasencontradas = Object.keys(this.recetas).find(
            (id_receta) => this.recetas[id_receta].get_title() === title);
        if (recetasencontradas == undefined) {
            throw new Excepcion("Info","La receta no existe en el sistema.");
        }
        return this.recetas[recetasencontradas];  
        
    }

    addValoracion(val) {
        if (val instanceof Val_receta) {
            if (val.get_idreceta() in this.valoraciones_recetas) {
                this.valoraciones_recetas[val.get_idreceta()][val.get_userid()] = val;
            }
            else {
                this.valoraciones_recetas[val.get_idreceta()] = {};
                this.valoraciones_recetas[val.get_idreceta()][val.get_userid()] = val;
            }
        }
        else {
            throw new Exception("Error", "Los parámetros insertados no coinciden con los tipos requeridos");
        }
    }


    getValoracionReceta(receta) {
        let id_receta = receta.get_id();

        if (id_receta in this.valoraciones_recetas) {
            return this.valoraciones_recetas[id_receta];
        }
        else {
            return 0;
        }
    }

}

module.exports = ControllerReceta;