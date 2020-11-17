
// Definición de la clase Receta:

class Receta {
	
	constructor(titulo, instrucciones, duracion, dificultad, comensales, ingredientes) {
		this.titulo = titulo;
		this.instrucciones = instrucciones;
		this.comensales = comensales;
		this.duracion = duracion;
		this.dificultad = dificultad;
		this.ingredientes = ingredientes;

	};

	// Función que devuelve una receta como diccionario
	get_dict_receta() {
		return { "titulo": this.titulo, "instrucciones": this.instrucciones, "duracion": this.duracion, "dificultad":this.dificultad, "comensales":this.comensales, "ingredientes": this.ingredientes };
	}

}

module.exports = Receta;
