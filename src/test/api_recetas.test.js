
const request = require("supertest");

let data = require("./data_sample.json");

app = require("../../app.js");


describe("Test para insertar Receta", () => {
    describe("POST", () => {
        it("Debería crear una receta", (done) => {
            request(app)
                .post("/recetas/add")
                .send(data.recetas[0])
                .expect("Content-Type", /json/)
                .expect(201, done);
        });
        it("Debería devolver un error al insertar una receta que ya existe", (done) => {
            request(app)
                .post("/recetas/add")
                .send(data.recetas[0])
                .expect(409, done);
        });
    });
});

