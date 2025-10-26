// connecting the database
import "dotenv/config";
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "postgres",
    database: process.env.DB_NAME || "mydatabase",
    password: process.env.DB_PASSWORD || "password",
    port: process.env.DB_PORT || 5432,
    ssl: {
        rejectUnauthorized: false,
    },
    connectionTimeoutMillis: 10000,
    idleTimeoutMillis: 30000,
    max: 20,
});

pool.on("connect", () => {
    console.log("Connected to PostgreSQL database");
});

pool.on("error", (err) => {
    console.error("Unexpected error on idle client", err);
    process.exit(-1);
});

// Test connection when file is run directly
if (import.meta.url === `file://${process.argv[1]}`) {
    console.log("Testing database connection...");
    console.log("Config:", {
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER || "postgres",
        database: process.env.DB_NAME || "mydatabase",
        port: process.env.DB_PORT || 5432,
    });

    pool.query("SELECT NOW()", (err, res) => {
        if (err) {
            console.error("❌ Connection failed:", err.message);
            process.exit(1);
        }
        console.log("✅ Connection successful!");
        console.log("Server time:", res.rows[0].now);
        pool.end();
    });
}

export default pool;
