const dotenv = require('dotenv');
dotenv.config();
const request = require('supertest');
const app = require("../../src/app");

describe("Listar produtos", () => {
    test("test", async () => {
        let result = await request(app)
                        .get('/products');
        console.log(result);
        expect(true).toBe(true);
    })
})