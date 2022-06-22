import  request  from 'supertest';
import supertest from 'supertest';
import app from '../app';



describe("GET /resources", () => {


it("should respond with a 200 status code", async () => {
    await request(app)
    .get("/resources")
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200);
})
it ("should return json content type", async () => {
    await request(app)
      .get('/resources')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
})

})





// checked that GET sends back 200
//