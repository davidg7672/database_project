// connecting the database
import pkg from "pg";
const { Pool } = pkg;

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

pool.on("connect", () => {
    console.log("Connected to PostgreSQL database");
});

pool.on("error", (err) => {
    console.error("Unexpected error on idle client", err);
    process.exit(-1);
});

export default pool;
