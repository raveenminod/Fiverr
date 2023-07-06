import express from "express";
import { testFn } from "../controllers/conversation.controller.js";

const router = express.Router();

router.get("/conversation", testFn);

export default router;