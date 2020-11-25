let receta = require("../Receta");
let ingrediente = require("../Ingrediente");
let controllerReceta = require("../ControllerReceta");

let listRecetas = new controllerReceta();


const ingrediente_uno = new ingrediente("Ron Blanco", "100ml", "bebida");
const ingrediente_dos = new ingrediente("Seven UP", "200ml", "bebida");
const ingrediente_tres = new ingrediente("Azucar Morena", "1 o 2 cucharadas", "Hidratos de carbono");
const ingrediente_cuatro = new ingrediente("Hierba buena", "2-4 hojas", "Flor");

const receta_uno = new receta("Mojito", "Tritura las hojas de menta con el azúcar y el zumo de lima. Agrega un chorrito de agua con gas y llena el vaso con hielo picado. Vierta el ron y cubra con agua con gas. Decore y sirva con pajita.",10, "Fácil", 5, [ingrediente_uno, ingrediente_dos, ingrediente_tres]);
const receta_dos = new receta("Daikiri", "Tritura las hojas de menta con el azúcar y el zumo de lima. Agrega un chorrito de agua con gas y llena el vaso con hielo picado. Vierta el ron y cubra con agua con gas. Decore y sirva con pajita.",10, "Fácil", 5, [ingrediente_uno, ingrediente_dos, ingrediente_tres, ingrediente_cuatro]);


describe("Función para añadir una receta", () => {
    test('debe añadir un receta y comprobamos que efectivamente el array contiene un elemento', () => {

        expect.assertions(listRecetas);
        listRecetas.addReceta(receta_uno);
        expect.hasAssertions();
        expect(listRecetas.getRecetas().length).toEqual(1);


    });
});

describe("Función para eliminar una receta", () => {
    test('debe añadir otra receta y se elimanará la receta insertada en el test anterior', () => {

        expect.assertions(listRecetas);
        listRecetas.addReceta(receta_dos);
        expect(listRecetas.getRecetas().length).toEqual(2);

        listRecetas.delReceta(receta_uno);

        expect(listRecetas.getRecetas().length).toEqual(1);


    });
});

describe("Función para obtener una receta por titulo", () => {
    test('se va volver añadir la receta borrada en el test anterior y se va a buscar la receta Mojito', () => {

        expect.assertions(listRecetas);
        listRecetas.addReceta(receta_uno);
        expect(listRecetas.getRecetaByTitle(listRecetas.getRecetas(), 'Mojito')).toEqual(
            expect.objectContaining([{ "comensales": 5, "dificultad": "Fácil", "duracion": 10, "ingredientes": [{ "descripcion": "100ml", "nombre": "Ron Blanco", "recetas": undefined, "tipo": "bebida" }, { "descripcion": "200ml", "nombre": "Seven UP", "recetas": undefined, "tipo": "bebida" }, { "descripcion": "1 o 2 cucharadas", "nombre": "Azucar Morena", "recetas": undefined, "tipo": "Hidratos de carbono" }], "instrucciones": "Tritura las hojas de menta con el azúcar y el zumo de lima. Agrega un chorrito de agua con gas y llena el vaso con hielo picado. Vierta el ron y cubra con agua con gas. Decore y sirva con pajita.", "titulo": "Mojito" }]));


    });
});
