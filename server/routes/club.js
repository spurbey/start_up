const router = express.Router();
import express from "express";
import {createClub, getClubDataByClubCode, getAllClubsList} from "../controller/clubController.js"
import {clubPfpUpload} from "../middlewares/imageUpload.js"

router.post("/createclub", clubPfpUpload, createClub);
router.get("/clubs/:clubcode", getClubDataByClubCode);
router.get("/clubs", getAllClubsList);

export default router;

