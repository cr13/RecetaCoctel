
// Definición de la clase Ingredientes:

exports.Ingrediente = function (nombre, descripcion, tipo, receta) {
	this.nombre = nombre;
	this.descripcion = descripcion;
	this.tipo = tipo;
	this.receta = receta;

	this.set_ingrediente = set_ingrediente;
	this.get_ingrediente = get_ingrediente;
	this.modi_ingrediente = modi_ingrediente;
	this.assign_receta = assign_receta;
	this.get_recetas = get_recetas;

};


function set_ingrediente() {
	return true;
}

function get_ingrediente() {
	return true;
}

function modi_ingrediente() {
	return true;
}
function assign_receta() {
	return true;
}

function get_recetas() {
	return true;
}
