import express from "express";
import { testFn } from "../controllers/review.controller.js";

const router = express.Router();

router.get("/review", testFn);

export default router;