const Pool - require("pg").Pool;

const pool = new Pool({
    user: "tou",
    password: "testing",
    host: "localhost",
    port: 5432,
    database: "to-to-app"
});

module.exports = pool;

