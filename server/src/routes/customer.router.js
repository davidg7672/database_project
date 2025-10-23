import express from "express";
import pool from "../db/db.js";

const router = express.Router();

// queries all customers
router.get("/", (req, res) => {
    res.send("Customer route working!");
});

// querying a specific customer
router.get("/:id", (req, res) => {
    res.send(`Customer ${req.params.id}`);
});

router.post("/", (req, res) => {
    res.send("Create customer");
});

export default router;
