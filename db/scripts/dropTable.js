import { pool } from '../index.js';


const sqlString = `DROP TABLE resources;`;

async function dropTable() {
    const res = await pool.query(sqlString)
    console.log('Table dropped.')
}

dropTable();