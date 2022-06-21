import express from "express";
const router = express.Router();
import { query } from '../db/index.js';
import { getAllRes, getByID, postRes, updRes, deleteByID} from "../models/models.js";

/* GET users listing. */
router.get("/", async function (req, res, next) {
  let allRes = await getAllRes()
  console.log(allRes.rows)
  res.json({ success: true, payload: allRes.rows});
});

router.get("/:id", async function (req, res) {
  const requestID = Number(req.params.id);
  let requestRecbyId = await getByID(requestID)
  res.json({success: true, payload: requestRecbyId.rows});

});



router.post("/", async function(req, res){
  let data = req.body
  const result = postRes(data)
  console.log(result.rows)
  res.json({success: true, payload: result.rows})
});



router.put("/:id", async(req,res)=>{
  const id = Number(req.params.id);
  const data = req.body;
  const result = updRes(id, data)
  res.json({success: true, payload: result.rows });
})



  router.delete("/:id", async (req, res) => {
   const id = req.params.id
   const result = await deleteByID(id)
   res.json({success: true, payload: result.rows })
  })




export default router;

