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
it('should fetch a single resource', async () => {
    const resId = 1;
    const result = await request(app).get(`/resources/${resId}`);
    expect(result.statusCode).toEqual(200);
  });

})

describe("PUT /resources", () => {

it('should update a resource', async () => {
    const result = await request(app)
      .put('/resources/1')
      .send({
        "url": "updatedurl.com",
        "title": "A Title",
        "type": "A Type",
        "topic": "A Topic",
        "description": "Your description here."
        });
    console.log(result.body.payload)
    expect(result.statusCode).toEqual(200);
  });


})

describe("CREATE /resources", () => {
it('should add another resource to database', async () => {
    const result = await request(app)
      .post('/resources')
      .send({
        "url": "newurl.com",
        "title": "A Title",
        "type": "A Type",
        "topic": "A Topic",
        "description": "Your description here."
      });
    expect(result.statusCode).toEqual(200);

});

describe("DELETE /resources", () => {
it('should delete a resource', async () => {
    const result = await request(app).delete('/resources/1');
    expect(result.statusCode).toEqual(200);
  });
});

describe("ERROR /resources", () => {
  it('should respond with status code 404 if path is incorrect', async () => {
    const resId = 100;
    const result = await request(app).get(`/resource/${resId}`);
    expect(result.statusCode).toEqual(404);
  });

})
});