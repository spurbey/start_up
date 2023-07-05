import express from "express";
const router = express.Router();
import { setUpAuction, placeABid, getAuctionWinner } from "../controller/auctionsController.js"

router.post("/initAuction", setUpAuction);
router.put("/placeBid/:eventBriefId", placeABid);
router.get("/getWinner", getAuctionWinner);

export default router;

