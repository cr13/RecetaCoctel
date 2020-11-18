
// Definición de la clase Ingrediente

class Ingrediente {
	constructor (nombre, descripcion, tipo, recetas) {
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.tipo = tipo;
		this.recetas = recetas;

	}

	// Asignar ingrediente a receta
	assign_receta(receta) {
		this.recetas.push(receta);
	}

}

module.exports = Ingrediente;
