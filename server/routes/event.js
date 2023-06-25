import express from "express";
const router = express.Router();
import { postEvent, getEventsList, editEvent, removeEvent } from "../controller/eventController.js"
import {eventBannerUpload} from "../middlewares/imageUpload.js"

router.post("/postEvent", eventBannerUpload, postEvent);
router.get("/events", getEventsList);
router.put("/events/:eventBriefId", eventBannerUpload, editEvent);
router.delete("/events/:eventBriefId", removeEvent);

export default router;

