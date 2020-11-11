

// Definición de la clase ValoracionReceta:

class ValoracionReceta {
    constructor(user, receta, valoracion) {
        this.user = user;
        this.receta = receta;
        this.valoracion = valoracion;   

        this.set_valReceta = set_valReceta;

    };
}

module.exports = ValoracionReceta;
