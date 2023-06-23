import express from "express";
const router = express.Router();
import { createClub, getClubs, editClubProfile, uploadFeaturedImages } from "../controller/clubController.js"
import { clubPfpUpload, clubFeatureImagesUpload } from "../middlewares/imageUpload.js"

router.post("/createclub", clubPfpUpload, createClub);
router.post("/clubs", clubFeatureImagesUpload, uploadFeaturedImages)
router.get("/clubs", getClubs);
router.put("/clubs", editClubProfile)

export default router;

