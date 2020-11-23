let receta = require("../Receta");
let ingrediente = require("../Ingrediente");
let controllerIng = require("../ControllerIngrediente");

let listIngredientes = new controllerIng();


const ingrediente_uno = new ingrediente("Ron Blanco", "100ml", "bebida");
const ingrediente_dos = new ingrediente("Seven UP", "200ml", "bebida");
const ingrediente_tres = new ingrediente("Azucar Morena", "1 o 2 cucharadas", "Hidratos de carbono");
const ingrediente_cuatro = new ingrediente("Hierba buena", "2-4 hojas", "Flor");


describe("Función para añadir ingredientes", () => {
    test('debe añadir tres ingredientes y comprobamos que efectivamente el array contiene 3 elemento', () => {

        expect.assertions(listIngredientes);
        listIngredientes.addIngrediente(new ingrediente("Ron Blanco", "100ml", "bebida"));
        listIngredientes.addIngrediente(new ingrediente("Seven UP", "200ml", "bebida"));
        listIngredientes.addIngrediente(new ingrediente("Hierba buena", "2-4 hojas", "Flor"));
        expect(listIngredientes.getIngs().length).toEqual(3);


    })
});

