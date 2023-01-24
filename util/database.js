const mysql = require('mysql2');
const { DB_PSWD } = require('../env');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: DB_PSWD
});

module.exports = pool.promise();