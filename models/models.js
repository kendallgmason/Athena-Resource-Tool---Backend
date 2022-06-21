import {query} from "../db/index.js"

export async function getAllRec() {
    let allRes = await query(`SELECT * FROM resources`)
    return allRes
}

export async function getByID(requestID) {
    let requestRecbyId = await query(`SELECT * FROM resources WHERE Id = ${requestID};`);
    return requestRecbyId
}

export async function deleteByID(id) {
    const sqlString = `DELETE FROM resources WHERE id=$1 RETURNING *`
    const result = await query(sqlString, [id])
    return result
}