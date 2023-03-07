const Pool = require("pg").Pool;

const pool = new Pool({
    user: "touyeexiong",
    password: "testing",
    host: "localhost",
    port: 5432,
    database: "to-do-app"
});

module.exports = pool;

