import { pool } from '../index.js';

const sqlString = `CREATE TABLE IF NOT EXISTS resources (id INT PRIMARY KEY GENERATED
    ALWAYS AS IDENTITY, url TEXT, title TEXT, type TEXT, topic TEXT, description TEXT, isFavourite TEXT);`;

async function createResourcesTable(){
    const res = await pool.query(sqlString)
    console.log(res)
    console.log('Table created.')
};

createResourcesTable();

console.log("script works")