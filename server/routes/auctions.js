import express from "express";
const router = express.Router();
import { setUpAuction, placeABid, getBidDetails } from "../controller/auctionsController.js"

router.post("/initAuction", setUpAuction);
router.put("/placeBid/:eventBriefId", placeABid);
router.get("/bids/:eventBriefId", getBidDetails);

export default router;

