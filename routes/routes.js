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

}
)

router.get("/", async function (req, res) {
  let allTitles = await query(`SELECT title FROM resources`);
  res.json({success: true, payload: allTitles});
}
)


export default router;

