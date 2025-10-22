// connecting the database
const { Pool } = require("pg");

const pool = new Pool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "postgres",
    database: process.env.DB_NAME || "mydatabase",
    password: process.env.DB_PASSWORD || "password",
    port: process.env.DB_PORT || 5432,
    ssl:
        process.env.NODE_ENV === "production"
            ? { rejectUnauthorized: false }
            : false,
});

export default pool;
