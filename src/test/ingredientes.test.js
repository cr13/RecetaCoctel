var ingrediente = require("../Ingrediente");

describe("Función para comprobar que no existan ingredientes repetidos", () => {
    test("debe comprobar que no se repiten un mismo ingrediente", () => {
        // const ingrediente_uno = new ingrediente.Ingrediente("Ron Blanco", "100ml", "bebida");
        const ingrediente_uno = new ingrediente(1, "Ron Blanco", "100ml", "bebida");
        const ingrediente_dos = new ingrediente(2, "Seven UP", "200ml", "bebida");
        const ingrediente_tres = new ingrediente(3, "Azucar Morena", "1 o 2 cucharadas", "Hidratos de carbono");

        expect(ingrediente_uno).not.toBe(ingrediente_dos);
        expect(ingrediente_uno).not.toBe(ingrediente_tres);
        expect(ingrediente_dos).not.toBe(ingrediente_tres);
    });
});

