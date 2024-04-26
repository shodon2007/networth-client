const mysql = require('mysql2');

// Craete the connetion instance for the db
const conn = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DB,
    password: process.env.PASSWORD,
});

// Connect to the db
conn.connect()

class Database {
    async query(query, ...params) {
        try {
            // Send the query to the db
            const [res] = await conn.promise().query(query, params);
            return res;
        } catch (e) {
            // If something went wrong, then return the error
            const data = await conn.promise().query(query, params);
            console.error("ошибка", data);
            throw new Error("Ошибка в query db", query, e);
        }
    }
}


module.exports = Database;