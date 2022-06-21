import {query} from "../db/index.js"

export async function getAllRes() {
    let allRes = await query(`SELECT * FROM resources`)
    return allRes
}

export async function getByID(requestID) {
    let requestRecbyId = await query(`SELECT * FROM resources WHERE Id = ${requestID};`);
    return requestRecbyId
}

export async function postRes(data) {
    const sqlString = `INSERT INTO resources ( Url , Title, Type, Topic, Description ) VALUES ($1, $2, $3, $4, $5) RETURNING *;`
    const resPost = await query(sqlString, [data.url, data.title, data.type, data.topic, data.description])
    return resPost
}

export async function deleteByID(id) {
    const sqlString = `DELETE FROM resources WHERE id=$1 RETURNING *`
    const result = await query(sqlString, [id])
    return result
}