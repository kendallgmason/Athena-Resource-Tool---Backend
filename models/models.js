import {query} from "../db/index.js"


export async function getAllRes() {
    let allRes = await query(`SELECT * FROM resources`)
    return allRes
}


export async function getByID(requestID) {
    let requestRecbyId = await query(`SELECT * FROM resources WHERE Id = ${requestID};`);
    return requestRecbyId
}



export async function getByTitle(title) {
    const sqlString = `SELECT * FROM resources WHERE title ILIKE '%${title}%'`
    let result = await query(sqlString)
    return result
}


export async function postRes(data) {
    const sqlString = `INSERT INTO resources ( Url , Title, Type, Topic, Description, isFavourite) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`
    const resPost = await query(sqlString, [data.url, data.title, data.type, data.topic, data.description, 'false'])
    return resPost
}


export async function updRes(id, data) {
    const sqlString = `UPDATE resources SET Url = $1 , Title = $2, Type = $3, Topic = $4, Description = $5, isFavourite = $6 WHERE id = $7 RETURNING *`
    const result = await query(sqlString,[data.url, data.title, data.type, data.topic, data.description, data.isFavourite, id]); 
    return result
}


export async function deleteByID(id) {
    const sqlString = `DELETE FROM resources WHERE id=$1 RETURNING *`
    const result = await query(sqlString, [id])
    return result
}