
// Definición de la clase Ingrediente

class Ingrediente {
	constructor(id_ing, nombre, descripcion, tipo, recetas) {
		if (this.checkType(id_ing, nombre, descripcion, tipo, recetas)){
			this.id_ing = id_ing;
			this.nombre = nombre;
			this.descripcion = descripcion;
			this.tipo = tipo;
			this.recetas = recetas;
		}
		else {
			throw "Los datos no son correctos";
		}
	}

	//Función para comprobar el tipo de datos recibidos
	checkType(id_ing, nombre, descripcion, tipo, recetas) {
		return ((typeof id_ing === 'number') && (typeof nombre === 'string') && (typeof descripcion === 'string') && (typeof tipo === 'string') && (Array.isArray(recetas)));				
	}

	// Asignar ingrediente a receta
	assign_receta(receta) {
		this.recetas.push(receta);
	}

}

module.exports = Ingrediente;
