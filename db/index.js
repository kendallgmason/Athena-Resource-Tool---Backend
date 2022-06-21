import pg from "pg";
import "dotenv/config";

export const pool = new pg.Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    ssl: { rejectUnauthorized: false },
  });

  export function query(text, params, callback) {
    return pool.query(text, params, callback);
  }

//   const res = await pool.query("SELECT NOW()");
// await pool.end();
// console.log(res.rows);
// console.log("the path is correct");