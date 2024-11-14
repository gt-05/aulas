const request = require('supertest');
const connection = require('../../../src/database/connection');

const app = require('../../../src/app');
const {UserModel} = require('../models');
const {userData} = require('../ultils')

let request;
let users = [];
beforeAll(async () => {
    request = await supertest(app);
    users.push(userData());
    users.push(userData());
    await UserModel.truncate();
    await UserModel.bulkCreate(users);
})

describe("GET /users", () => {
    it("deve retornar status code 200 e um body com array de usuarios", async () => {
        let response = await request.get('/users')
        expect(response.body).toBe(users)
    })
});