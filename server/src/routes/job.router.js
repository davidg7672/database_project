import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Job route working!");
});

export default router;
