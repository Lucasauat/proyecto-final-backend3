import * as chai from "chai";import supertest from "supertest";

const expect = chai.expect;

const requester = supertest("http://localhost:8080");
describe("Testing Users API", () => {

    it("GET /api/users debe devolver un array", async () => {

        const response = await requester.get("/api/users");

        expect(response.status).to.equal(200);
        expect(response.body).to.be.an("array");
    });

    it("POST /api/users debe crear un usuario", async () => {

        const mockUser = {
            name: "Lucas",
            email: "lucas@test.com"
        };

        const response = await requester
            .post("/api/users")
            .send(mockUser);

        expect(response.status).to.equal(201);
        expect(response.body).to.have.property("email");
    });

    it("POST /api/users debe fallar si faltan datos", async () => {

        const mockUser = {
            email: "test@test.com"
        };

        const response = await requester
            .post("/api/users")
            .send(mockUser);

        expect(response.status).to.equal(400);
    });

    it("POST /api/users/login debe loguear usuario", async () => {

        const mockLogin = {
            email: "lucas@test.com"
        };

        const response = await requester
            .post("/api/users/login")
            .send(mockLogin);

        expect(response.status).to.equal(200);
        expect(response.body).to.have.property("token");
    });

});