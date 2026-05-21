import * as chai from "chai";
import supertest from "supertest";

const expect = chai.expect;

const requester = supertest("http://localhost:8080");

describe("Testing Adoptions API", () => {

    it("GET /api/adoptions debe devolver array", async () => {

        const response = await requester.get("/api/adoptions");

        expect(response.status).to.equal(200);
        expect(response.body).to.be.an("array");
    });

    it("POST /api/adoptions/:uid/:pid debe crear adopcion", async () => {

        const response = await requester.post("/api/adoptions/1/1");

        expect(response.status).to.equal(201);
        expect(response.body).to.have.property("user");
    });

});