
const request = require("supertest");

let data = require("./data_sample.json");

app = require("../../app.js");


describe("Test para insertar Receta", () => {
    describe("POST", () => {
        it("Debería crear una receta", (done) => {
            request(app)
                .post("/recetas/")
                .send(data.recetas[0])
                .expect("Content-Type", /json/)
                .expect(201, done);
        });
        it("Debería devolver un error al insertar una receta que ya existe", (done) => {
            request(app)
                .post("/recetas/")
                .send(data.recetas[0])
                .expect(409, done);
        });
    });
});

describe("Test para obtener Recetas", () => {
    describe("GET", () => {
        it("Debería devolver una lista con todos las recetas", (done) => {
            request(app)
                .get("/recetas")
                .expect("Content-Type", /json/)
                .expect(200, done);
        });

        it("Receta encontrada", (done) => {
            request(app)
                .get("/recetas/Mojito")
                .expect("Content-Type", /json/)
                .expect(200, done);
        });

        it("Receta no encontrada", (done) => {
            request(app)
                .get("/recetas/recetaprueba")
                .expect("Content-Type", /json/)
                .expect(404, done);
        });
    });
});

describe("Test para eliminar receta", () => {
    it("Eliminar una receta dando su id", (done) => {
        request(app)
            .delete("/recetas/1")
            .expect("Content-Type", /json/)
            .expect(200, done);
    });
    it("La receta a eliminar no existe", (done) => {
        request(app)
            .delete("/recetas/1")
            .expect("Content-Type", /json/)
            .expect(404, done);
    });
});

