

// Definición de la clase Receta:

exports.Receta = function (titulo, instrucciones, ingredientes) {
	this.titulo = titulo;
	this.instrucciones = instrucciones;
	this.ingredientes = ingredientes;

	this.get_receta = get_receta;

};

// Función que devuelve una receta como diccionario
function get_dict_receta() {
	return { "titulo": titulo, "instrucciones": instrucciones, "ingredientes":ingredientes};
}
