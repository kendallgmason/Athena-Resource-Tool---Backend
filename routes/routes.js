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

router.post("/", async function(req, res){
  let body = req.body
  const sqlString = `INSERT INTO resources ( Url , Title, Type, Topic, Description ) VALUES ($1. $2, $3, $4, $5);`
  const resourcesPost = await query(sqlString, [body.Url, body.Title, body.Type, body.Topic, body.Description])
  res.json({success: true, payload: resourcesPost})
})

// router.post("/", function (req, res){
//   let body = req.body
//   users.push(body)
//   const responseObject = { success: true, payload: body }
//   res.json(responseObject)
// })

// use lines 19 and 20
// line 21 is referencing an array= we want to interact with database
// our line 22 is res.json and payload will be variable declared on line 21 

// animalRouter.post("/", async function (req, res){
//   let body = req.body
//   const sqlString = `INSERT INTO animals ( animal_species , animal_name)
//   VALUES ($1, $2);`
//   const resPostAnimal = await query(sqlString, [body.animal_species, body.animal_name])
//   let responseObject = {
//     success: true,
//     payload: resPostAnimal,
//   };
//   res.json(responseObject)
//   console.log(responseObject)
// })




// router.put("/:id", function(req,res){
//   let id = req.params.id
//   let body = req.body
//   let updatedUser = {}
//   for (let i=0; i<users.length; i++) {
//       if (Number(id) === users[i].id) {
//           users[i] = body;
//           updatedUser = users[i]
//           break
//       }
//   }
//   const response = { success: true, payload: updatedUser }
//   res.json(response)
// })

// router.delete("/:id", function(req, res){
//   let id = req.params.id;
//   let deletedUser = {}
//   for (let i = 0; i<users.length; i++) {
//       if (Number(id) === users[i].id) { 
//           deletedUser = users.splice(users[i].id)
//           break
//       }
//   }
//   let response = { success: true, payload: deletedUser }
//   res.json(response)
// })


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

