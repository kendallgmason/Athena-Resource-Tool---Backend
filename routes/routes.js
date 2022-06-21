import express from "express";
const router = express.Router();
import { query } from '../db/index.js';

/* GET users listing. */
router.get("/", async function (req, res, next) {
  let allRes = await query(`SELECT * FROM resources`)
  res.json({ success: true, payload: allRes.rows });
});

export default router;


// animalRouter.get('/', async function (req, res) {
//   let allAnimals = await getAllAnimals();
//   res.json({ success: true, payload: allAnimals.rows,});
// });

// export async function getAllAnimals() {
//   let allAnimals = await query(`SELECT * FROM animals;`);
//   return allAnimals;
// }
