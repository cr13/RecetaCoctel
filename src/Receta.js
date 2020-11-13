
// Definición de la clase Receta:

class Receta {
	
	constructor (titulo, instrucciones, ingredientes) {
		this.titulo = titulo;
		this.instrucciones = instrucciones;
		this.ingredientes = ingredientes;

	};

	// Función que devuelve una receta como diccionario
	get_dict_receta() {
		return { "titulo": this.titulo, "instrucciones": this.instrucciones, "ingredientes": this.ingredientes };
	}

}

module.exports = Receta;
