import { pool } from '../index.js';
import  resources  from '../../libs/data.js';

async function populateTable(){

    for(let i = 0; i < resources.length; i++){
        const result = await pool.query(
            `INSERT INTO resources(url, title, type, topic, description) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
            [resources[i].url, resources[i].title, resources[i].type, resources[i].topic, resources[i].description]);
            console.log(result.rows)
        }
    }

populateTable();