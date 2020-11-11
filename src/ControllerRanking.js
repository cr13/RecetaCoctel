var controllerReceta = require("./ControllerReceta");


class ControllerRanking {
    constructor() {
        this.list_recetas = {};
    }

    //Devolvera las 10 recetas mejor valoradas
    getTop10Recetas() {
        return true;
    }

    //Devulve las últimas recetas insertadas
    getLatestRecetas() {
        return true;
    }

}


module.exports = ControllerRanking;