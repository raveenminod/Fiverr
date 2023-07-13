import express from "express";
import { createToken, getReviews, deleteReview } from "../controllers/review.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/", verifyToken, createToken);
router.get("/:id", getReviews);
router.delete("/:id", deleteReview);

export default router;