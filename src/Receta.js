

// Definición de la clase Receta:

class Receta {
	
	constructor (titulo, instrucciones, ingredientes) {
		this.titulo = titulo;
		this.instrucciones = instrucciones;
		this.ingredientes = ingredientes;

		this.get_dict_receta = get_dict_receta;

	};

	// Función que devuelve una receta como diccionario
	get_dict_receta() {
		return { "titulo": titulo, "instrucciones": instrucciones, "ingredientes":ingredientes};
	}

}

module.exports = Receta;
