import mongoose from 'mongoose';
const { Schema } = mongoose;

//question model
const clubSchema = new Schema({
    ownerid: {
        type: String,
        required: true,
        unique: true
    },
    clubcode: {
        type: String,
        required: true,
        unique: true
    },
    clubname: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    // verification: {
    //     type: Bool,
    //     default: false,
    // },

    clubPfpImageName: {
        type: String,
    },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },


});
export default mongoose.model('Clubs', clubSchema, 'Clubs')
