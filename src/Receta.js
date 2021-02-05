

const tp_dificultad = Object.freeze({
	1: 'FACIL',
	2: 'MEDIO',
	3: 'DIFICIL'

});

// Definición de la clase Receta:

class Receta {
	
	constructor(id_receta, titulo, instrucciones, duracion, dificultad, comensales, ingredientes) {
		if (this.checkType(id_receta, titulo, instrucciones, duracion, dificultad, comensales, ingredientes)){
			this.id_receta = id_receta;
			this.titulo = titulo;
			this.instrucciones = instrucciones;
			this.comensales = comensales;
			this.duracion = duracion;
			if(this.checkDificultad(dificultad)){ this.dificultad = dificultad; } else {throw "Error al insertar la receta, el tipo de dificultad no es valido";};
			this.ingredientes = ingredientes;
		} else {
			throw "Los datos insertados no son correctos";
		}

	}

	//Función para comprobar el tipo de datos recibidos
	checkType(id_receta, titulo, instrucciones, duracion, dificultad, comensales, ingredientes) {
		let succesful = false;
		if ((typeof id_receta === 'number') && (typeof titulo === 'string')
		 && (typeof comensales === 'number') && (typeof instrucciones === 'string') 
		 && (typeof duracion === 'number') && (typeof dificultad === 'string') 
		 && (Array.isArray(ingredientes))){
			succesful= true;
		} else { succesful = false;}

		return succesful
	}

	checkDificultad(df) {
		let exito = true;
		let dificultad = Object.keys(tp_dificultad).find(
			(id) => tp_dificultad[id] === df
		);

		if (dificultad == undefined) {
			exito = false;
		}
		return exito;
	}

	get_id(){
		return this.id_receta;
	}

	get_title() {
		return this.titulo;
	}

	// Función que devuelve una receta como diccionario
	get_dict_receta() {
		return { "id_receta": this.id_receta, "titulo": this.titulo, "instrucciones": this.instrucciones, "duracion": this.duracion, "dificultad":this.dificultad, "comensales":this.comensales, "ingredientes": this.ingredientes };
	}

}



module.exports = Receta;
