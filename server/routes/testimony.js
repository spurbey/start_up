import express from "express";
const router = express.Router();
import { createTestimony, getTestimoniesByClubCode } from "../controller/testimoneyController.js";

router.post("/createTestimony", createTestimony);
router.get("/testimonies/:clubcode", getTestimoniesByClubCode);


export default router;