import express from "express";
const router = express.Router();
import { createClub, getClubDataByClubCodeOrName, getAllClubsList, getClubsListByOwnerId, editClubProfile, uploadFeaturedImages } from "../controller/clubController.js"
import { clubPfpUpload, clubFeatureImagesUpload } from "../middlewares/imageUpload.js"

router.post("/createclub", clubPfpUpload, createClub);
router.get("/clubs/:searchInputText", getClubDataByClubCodeOrName);
router.get("/clubs/:ownerid", getClubsListByOwnerId);
router.get("/clubs", getAllClubsList);
router.put("/clubs", editClubProfile)
router.post("/clubs", clubFeatureImagesUpload, uploadFeaturedImages)

export default router;

