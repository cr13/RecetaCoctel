let ingrediente = require("../Ingrediente");
let controllerIng = require("../ControllerIngrediente");

let listIngredientes = new controllerIng();


const ingrediente_uno = new ingrediente(1,"Ron Blanco", "100ml", "bebida");
const ingrediente_dos = new ingrediente(2,"Seven UP", "200ml", "bebida");
const ingrediente_tres = new ingrediente(3,"Azucar Morena", "1 o 2 cucharadas", "Hidratos de carbono");


describe("Función para añadir ingredientes", () => {
    test('debe añadir tres ingredientes y comprobamos que efectivamente el array contiene 3 elemento', () => {

        expect.assertions(listIngredientes);
        listIngredientes.addIngrediente(ingrediente_uno);
        listIngredientes.addIngrediente(ingrediente_dos);
        listIngredientes.addIngrediente(ingrediente_tres);
        expect(listIngredientes.getIngs().length).toEqual(3);


    });
});

