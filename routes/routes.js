import express from "express";
const router = express.Router();
import { query } from '../db/index.js';
import { getAllRec, getByID, deleteByID} from "../models/models.js";

/* GET users listing. */
router.get("/", async function (req, res, next) {
  let allRes = await getAllRec()
  console.log(allRes.rows)
  res.json({ success: true, payload: allRes.rows});
});

router.get("/:id", async function (req, res) {
  const requestID = Number(req.params.id);
  let requestRecbyId = await getByID(requestID)
  res.json({success: true, payload: requestRecbyId.rows});

});

// post router gives console socket hang up error 

router.post("/", async function(req, res){
  let data = req.body
  const sqlString = `INSERT INTO resources ( Url , Title, Type, Topic, Description ) VALUES ($1, $2, $3, $4, $5) RETURNING *;`
  const resourcesPost = await query(sqlString, [data.url, data.title, data.type, data.topic, data.description])
  res.json({success: true, payload: resourcesPost.rows})
});

// put router gives console socket hang up error 

router.put("/:id",async(req,res)=>{
  const id = Number(req.params.id);
  const data = req.body;
  const sqlString = `UPDATE resources SET 
  Url = $1 , Title = $2, Type = $3, Topic = $4, Description = $5 WHERE id = $5 RETURNING *`
  const result = await query(sqlString,[data.id, data.Url, data.Title, data.Type, data.Topic, data.Description]); 
  res.json({success: true, payload: result.rows });
})

//delete router works 

  router.delete("/:id", async (req, res) => {
   const id = req.params.id
   const result = await deleteByID(id)
   res.json({success: true, payload: result.rows })
  })




export default router;

