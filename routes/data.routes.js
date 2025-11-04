import { Router } from "express";
import { createEntry, getData } from "../controllers/dataController.js";

const router = Router();

router.get("/", getData);
router.post("/", createEntry);

export default router;
