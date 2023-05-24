import mongoose from 'mongoose';
const { Schema } = mongoose;

//question model
const userSchema = new Schema({
  email: {
    type:String,
    required: true,
    unique: true
  },
  workemail: {
    type:String,
  },
  username: {
    type:String,
    required:true,
    unique: true
  },
  password: {
    type:String,
    required:true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  createdAt: { type: Date, default: Date.now },

});
export default mongoose.model('User',userSchema)
