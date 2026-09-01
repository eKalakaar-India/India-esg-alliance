import { Router } from "express";
import { createQuery } from "../controllers/query.controllers.js";

const router = Router();

// POST: /api/v1/query
router.post("/query", createQuery);

export default router;
