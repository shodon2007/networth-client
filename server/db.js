const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DB,
    password: process.env.PASSWORD,
});

conn.connect()

class Database {
    async query(query, ...params) {
        try {
            const [res] = await conn.promise().query(query, params);
            return res;
        } catch (e) {
            const data = await conn.promise().query(query, params);
            console.error("ошибка", data);
            throw new Error("Ошибка в query db", query, e);
        }
    }
}


module.exports = Database;