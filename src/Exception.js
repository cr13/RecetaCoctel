
class Excepcion {

    constructor(tipo, msg) {
        if(this.checkType(tipo, msg)){
            this.tipo = tipo;
            this.msg = msg;
        } 
        else {
            throw "El tipo de datos insertados no son string";
        }
    }

    //Función para comprobar el tipo de datos recibidos
    checkType(tipo, msg) {
        return ((typeof tipo === 'string') && (typeof msg === 'string'));
    }
}

module.exports = Excepcion;