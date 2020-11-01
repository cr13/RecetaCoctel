

// Definición de la clase Receta:

exports.Receta = function (titulo, descripcion, ingredientes) {
	this.titulo = titulo;
	this.descripcion = descripcion;
	this.ingredientes = ingredientes;

	this.set_receta = set_receta;
	this.get_receta = get_receta;
	this.modi_receta = modi_receta;


};

function set_receta() {
	return true;
}

function get_receta() {
	return true;
}

function modi_receta() {
	return true;
}