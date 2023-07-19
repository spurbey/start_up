import mongoose from "mongoose";
const { Schema } = mongoose;
 
const orgSchema = new Schema({

    orgName: {
        type: String,
        required: true,
    },

    orgCode: {
        type: String,
        unique: true,
    },

    ownerId: {
        type: String,
        required: true,
        unique: true
    },

    orgLogoImage: {
        type: Object,
    },

    verified: {
        type: Boolean,
        default: false,
    },

    about: {
        type: String,
        required: true,
    },

    sponseredEventsIDs: {
        type: Object,
    },

    goals: {
        type: String,
    },

    domain: {
        type: String,
    },

    offers: {
        type: String,
    },

    joined: {
        type: Date,
    },

    rating: {
        type: Number,
    },

    bidsOwn: {
        type: Number,
    },

    bidsPlaced: {
        type: Number,
    },

    testimonialIds: {
        type: Object,
    },

    //social media handles

    facebook: {
        type: String,
        default: "",
    },

    linkedIn: {
        type: String,
        default: "",
    },

    twitter: {
        type: String,
        default: "",
    },

    instagram: {
        type: String,
        default: "",
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

export default mongoose.model("Orgs", orgSchema, "orgs");