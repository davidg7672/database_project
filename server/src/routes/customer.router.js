const express = require("express");
const pool = require("../db/db");

const router = express.Router();

// queries all customers
router.get("/");

// querying a specific customer
router.get("/:id");

router.post("/");

export default router;
