import mongoose from 'mongoose';
const { Schema } = mongoose;

//question model
const clubSchema = new Schema({
    ownerId: {

        // about
        type: String,
        required: true,
        unique: true
    },
    clubCode: {
        type: String,
        unique: true
    },
    clubName: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },

    verified: {
        type: Boolean,
        default: false,
    },

    rating: {
        type: Number,
    },

    clubPfpImage: {
        type: Object,
    },

    //social media handles
    facebook: {
        type: String,
        default: "",
    },

    instagram: {
        type: String,
        default: "",

    },

    twitter: {
        type: String,
        default: "",

    },

    linkedin: {
        type: String,
        default: "",
    },

    //featured images
    featuredImages: {
        type: Object,
        default:{},
    },

    featImgTitle1: {
        type: String,
        default: "",
    },

    featImgTitle2: {
        type: String,
        default: "",
    },

    featImgTitle3: {
        type: String,
        default: "",
    },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },


});
export default mongoose.model('Clubs', clubSchema, 'Clubs')
