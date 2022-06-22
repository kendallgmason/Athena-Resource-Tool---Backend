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
it('should fetch a single post', async () => {
    const postId = 1;
    const res = await request(app).get(`/resources/${postId}`);
    expect(res.statusCode).toEqual(200);
  });

})

describe("POST /resources", () => {

it('should update a post', async () => {
    const res = await request(app)
      .put('/resources/1')
      .send({
        "url": "updatedurl.com",
        "title": "A Title",
        "type": "A Type",
        "topic": "A Topic",
        "description": "Your description here."
        });
    console.log(res.body.payload)
    expect(res.statusCode).toEqual(200);
    expect(res.body.payload).toEqual( [
        {
          id: 1,
          url: 'updatedurl.com',
          title: 'A Title',
          type: 'A Type',
          topic: 'A Topic',
          description: 'Your description here.'
        }
      ])

  });


})

describe("CREATE /resources", () => {
it('should create a new post', async () => {
    const res = await request(app)
      .post('/resources')
      .send({
        "url": "newurl.com",
        "title": "A Title",
        "type": "A Type",
        "topic": "A Topic",
        "description": "Your description here."
      });
    expect(res.statusCode).toEqual(200);

});

})