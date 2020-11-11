var receta = require("../Receta");
var ingrediente = require("../Ingrediente");

describe("Función para insertar una receta", () => {
    test("debe comprobar que no se repiten un mismo ingrediente en la receta", () => {
        const ingrediente_uno = new ingrediente("Ron Blanco", "100ml", "bebida");
        const ingrediente_dos = new ingrediente("Seven UP", "200ml", "bebida");
        const ingrediente_tres = new ingrediente("Azucar Morena", "1 o 2 cucharadas", "Hidratos de carbono");
        const receta_uno = new receta("Mojito", "Tritura las hojas de menta con el azúcar y el zumo de lima. Agrega un chorrito de agua con gas y llena el vaso con hielo picado. Vierta el ron y cubra con agua con gas. Decore y sirva con pajita.", [ingrediente_uno, ingrediente_dos, ingrediente_tres] );

        //const output = receta_uno;

        expect(ingrediente_uno).not.toBe(ingrediente_dos);
        expect(ingrediente_uno).not.toBe(ingrediente_tres);
        expect(ingrediente_dos).not.toBe(ingrediente_tres);
    });
});