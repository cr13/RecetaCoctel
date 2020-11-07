

// Definición de la clase Receta:

exports.Receta = function (titulo, descripcion, ingredientes) {
	this.titulo = titulo;
	this.descripcion = descripcion;
	this.ingredientes = ingredientes;

	this.get_receta = get_receta;

};

// Función que devuelve una receta
function get_receta() {
	return {"titulo":titulo, "descripcion":descripcion, "ingredientes":ingredientes};
}
