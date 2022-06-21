import express from "express";
const router = express.Router();
import { query } from '../db/index.js';

/* GET users listing. */
router.get("/", async function (req, res, next) {
  let allRes = await query(`SELECT * FROM resources`)
  res.json({ success: true, payload: allRes.rows });
});

router.get("/:id", async function (req, res) {
  const requestID = Number(req.params.id);
  let requestRecbyId = await query(`SELECT * FROM resources WHERE Id = ${requestID};`);
  res.json({success: true, payload: requestRecbyId.rows});

});

router.post("/", async function(req, res){
  let body = req.body
  const sqlString = `INSERT INTO resources ( Url , Title, Type, Topic, Description ) VALUES ($1. $2, $3, $4, $5);`
  const resourcesPost = await query(sqlString, [body.Url, body.Title, body.Type, body.Topic, body.Description])
  res.json({success: true, payload: resourcesPost.rows})
});

router.put("/:id",async(req,res)=>{
  const id = Number(req.params.id);
  const data = req.body;
  const sqlString = `UPDATE resources SET 
  Url = $1 , Title = $2, Type = $3, Topic = $4, Description = $5 WHERE id = $5 RETURNING*`
  const result = await query(sqlString,[body.id, body.Url, body.Title, body.Type, body.Topic, body.Description]); 
  return res.json({
      success: true,
      payload: result.rows
  });

router.delete

export async function deleteMeteorite(id){
    const res = await query(`
    DELETE FROM meteorites WHERE  meteorite_id=$1 RETURNING *;`,[id]);
    return res.rows;
};

//plan 
// post route
// test it with postman 
// put route 
// test it with postman
// patch route
// test it with postman
// delete route
// test it with postman 



export default router;

