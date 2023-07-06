import express from "express";
import { testFn } from "../controllers/order.controller.js";

const router = express.Router();

router.get("/order", testFn);

export default router;