
// Definición de la clase Ingrediente

exports.Ingrediente = function (nombre, descripcion, tipo, recetas) {
	this.nombre = nombre;
	this.descripcion = descripcion;
	this.tipo = tipo;
	this.recetas = recetas;

	this.assign_receta = assign_receta;

};

// Asignar ingrediente a receta
function assign_receta(receta) {
	this.recetas.push(receta);
}

