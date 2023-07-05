import mongoose from 'mongoose';
const { Schema } = mongoose;

//question model
const eventSchema = new Schema({

    isCollab: {
        type: Boolean,
        required: true,
    },

    ownerIds: {
        type: Array,
        required: true,
    },

    clubCodes: {
        type: Array,
        required: true,
    },

    clubNames: {
        type: Array,
        required: true,
    },

    collabId: {
        type: String,
    },

    eventBriefId: {
        type: String,
        unique: true,
        required: true,
    },

    eventTitle: {
        type: String,
        required: true,
    },
    
    eventDate: {
        type: Date,
        required: true,
    },

    eventVenue: {
        type: String,
        required: true,
    },

    eventLength: {
        type: Number,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    eventTags: {
        type: Array,
        required: true,
    },

    bannerImage: {
        type: Object,
        required: true,
    },

    isLive: {
        type: Boolean,
        default: false,
    },

    viewCount: {
        type: Number,
        default: 0,
    },

    runningFrom: {
        type: Date,
    },

    frequency: {
        type: Number,
    },

    averageFootfall: {
        type: Number,
        default: 0,
    },

    tentativeMonth: {
        type: String,
    },

    sponserType: {
        type: Array,
    },

    biddingStartDate: {
        type: Date,
        required: true,
    },

    bidPeriod: {
        type: Number,
        required: true,
    },

    isPreview: {
        type: Boolean,
        default: false,
    },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },

});
export default mongoose.model('Event', eventSchema, 'Event')
