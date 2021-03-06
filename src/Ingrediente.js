
// Definición de la clase Ingrediente

class Ingrediente {
	constructor(id_ing, nombre, descripcion, tipo, recetas) {
		if (this.checkType(id_ing, nombre, descripcion, tipo)){
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
	checkType(id_ing, nombre, descripcion, tipo) {
		return ((typeof id_ing === 'number') && (typeof nombre === 'string') && (typeof descripcion === 'string') && (typeof tipo === 'string'));				
	}

	get_id(){
		return this.id_ing;
	}

	// Asignar ingrediente a receta
	assign_receta(receta) {
		this.recetas.push(receta);
	}

}

module.exports = Ingrediente;
