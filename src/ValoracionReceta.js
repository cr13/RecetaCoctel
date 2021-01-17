

// Definición de la clase ValoracionReceta:

class ValoracionReceta {
    constructor(user_id, id_receta, valoracion) {
        if (this.checkType(user_id, id_receta, valoracion)){
            this.user_id = user_id;
            this.id_receta = id_receta;
            this.valoracion = valoracion;  
        }
        else {
            throw "Los datos no son correctos";
        } 

    }

    checkType(user, id_receta, valoracion) {
        return ((typeof id_receta === 'number') && (typeof user === 'number') && (typeof valoracion === 'number') );                    
    }

    get_userid(){
        return this.user_id;
    }

    get_idreceta(){
        return this.id_receta;
    }
}

module.exports = ValoracionReceta;
