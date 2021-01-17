var receta = require("../Receta");
var ingrediente = require("../Ingrediente");

describe("Función para insertar una receta", () => {
    test("debe comprobar que nos se repita la receta", () => {
        // const ingrediente_uno = new ingrediente.Ingrediente("Ron Blanco", "100ml", "bebida");
        const ingrediente_uno = new ingrediente(1, "Ron Blanco", "100ml", "bebida");
        const ingrediente_dos = new ingrediente(2, "Seven UP", "200ml", "bebida");
        const ingrediente_tres = new ingrediente(3, "Azucar Morena", "1 o 2 cucharadas", "Hidratos de carbono");
        const ingrediente_cuatro = new ingrediente(4, "Hierba buena", "2-4 hojas", "Flor");

        const receta_uno = new receta(1, "Mojito", "Tritura las hojas de menta con el azúcar y el zumo de lima. Agrega un chorrito de agua con gas y llena el vaso con hielo picado. Vierta el ron y cubra con agua con gas. Decore y sirva con pajita.",
        10, "Fácil", 5, [ingrediente_uno, ingrediente_dos, ingrediente_tres]);
        const receta_dos = new receta(2, "Mojito", "Tritura las hojas de menta con el azúcar y el zumo de lima. Agrega un chorrito de agua con gas y llena el vaso con hielo picado. Vierta el ron y cubra con agua con gas. Decore y sirva con pajita.",
        15, "Fácil", 5, [ingrediente_uno, ingrediente_dos, ingrediente_tres, ingrediente_cuatro]);

        expect(receta_uno).not.toBe(receta_dos);

    });
});