// importing dependencies
import "dotenv/config";
import express from "express";
import cors from "cors";

// Import database connection
import pool from "./db/db.js";

// getting routes
import employeeRouter from "./routes/employee.router.js";
import customerRouter from "./routes/customer.router.js";
import jobRouter from "./routes/job.router.js";
import vehicleRouter from "./routes/vehicle.router.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", async (req, res) => {
    try {
        await pool.query("SELECT 1");
        res.status(200).json({
            status: "ok",
            message: "Server and database are running",
        });
    } catch (error) {
        res.status(503).json({
            status: "error",
            message: "Database connection failed",
            error: error.message,
        });
    }
});

app.use("/api/employee", employeeRouter);
app.use("/api/customer", customerRouter);
app.use("/api/job", jobRouter);
app.use("/api/vehicle", vehicleRouter);

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error("Error:", err);
    res.status(err.status || 500).json({
        error: err.message || "Internal server error",
        ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
});
