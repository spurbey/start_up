import mongoose from "mongoose";
const { Schema } = mongoose;

const bidSchema = new Schema({

    //initiallize a bid
    clubCode: {
        type: String,
        unique: true,
        required: true,
    },

    eventBriefId: {
        type: String,
        required: true,
    },

    biddingStartTime: {
        type: Date,
        // required: true,
    },

    biddingEndTime: {
        type: Date,
        // required: true,
    },

    isAuctionLive: {
        type: Boolean,
        required: true,
    },

    auctionStartEta: {
        type: String,
    },

    auctionEndEta: {
        type: String,
    },

    eventTimeZone: {
        type: Number,
    },

    minimumSeedAmount: {
        type: Number,
        required: true,
    },

    incrementAmount: {
        type: Number,
        required: true,
    },

    sponsershipType: {
        type: Array,
        required: true,
    },

    //place a bid

    bidPlacedMultiple: {
        type: Number,
    },

    bidPlacingOrgCode: {
        type: String,
    },

    // get bid details

    biddingOrgsList: {
        type: Array,
        required: true,
        default: [],
    },

    bidAmountsList: {
        type: Array,
        required: true,
        default: [],
    },

    currentTopBid: {
        type: Number,
        required: true,
        default: 0,
    },

    auctionWinningOrg: {
        type: String,
    },

    auctionWinningBidAmount: {
        type: Number,
    },

    auctionConcluded: {
        type: Boolean,
    },

    biddingOrgList: {
        type: Object
    },

    createdAt: {
        type: Date,
        default: Date.now(),
    },

    updatedAt: {
        type: Date,
        default: Date.now(),
    }
});


export default mongoose.model("Bids", bidSchema, "Bids");