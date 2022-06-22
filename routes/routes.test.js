import { request } from 'express';
import supertest from 'supertest';
import app from '../app';

describe("GET /resources", () => {


it("should respond with a 200 status code", async () => {
const response = await request(app).get("/resources")
expect(response.statusCode).toBe
})


})


