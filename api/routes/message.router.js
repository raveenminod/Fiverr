import express from "express";
import { testFn } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/message", testFn);

export default router;