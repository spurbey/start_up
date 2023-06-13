import express from "express";
const router = express.Router();
import { createTestimony, getTestimoniesByClubCode } from "../controller/eventController.js";

router.post("/createTestimony", createTestimony);
router.get("/testimonies/:clubcode", getTestimoniesByClubCode);


export default router;