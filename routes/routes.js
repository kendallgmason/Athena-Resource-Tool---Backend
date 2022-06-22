import express from "express";
const router = express.Router();
import { query } from '../db/index.js';
import { getAllRes, getByID, getByTitle, postRes, updRes, deleteByID} from "../models/models.js";

/* GET users listing. */
router.get("/", async function (req, res, next) {
  let title = req.query.title
  if (title === undefined) {
  let allRes = await getAllRes()
  let response = res.json({ success: true, payload: allRes.rows});
  return response
  } else {
    let result = await getByTitle(title)
    let response = res.json({success: true, payload: result.rows }) 
    return response 
  }
});

router.get("/:id", async function (req, res) {
  const requestID = Number(req.params.id);
  let requestRecbyId = await getByID(requestID)
  res.json({success: true, payload: requestRecbyId.rows});

});



router.post("/", async function(req, res){
  let data = req.body
  const result = await postRes(data)
  res.json({success: true, payload: result.rows})
});



router.put("/:id", async(req,res)=>{
  const id = Number(req.params.id);
  const data = req.body;
  const result = await updRes(id, data)
  res.json({success: true, payload: result.rows });
})



router.delete("/:id", async (req, res) => {
   const id = req.params.id
   const result = await deleteByID(id)
   res.json({success: true, payload: result.rows })
  })





export default router;

