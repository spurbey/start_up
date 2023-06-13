import mongoose from 'mongoose';
const { Schema } = mongoose;

//question model
const testimonialSchema = new Schema({

  clubcode: {
    type:String,
    required:true,
  },

  username: {
    type:String,
    required:true,
  },
  
  testimonyid: {
    type:String,
    required:true,  },
  
  eventname: {
    type:String,
    required:true,
  },

  description: {
    type:String,
    required:true,
  },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },

});
export default mongoose.model('Testimonies',testimonialSchema,'Testimonies')
