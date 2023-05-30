import mongoose from 'mongoose'

export const connect = async ()=>{
  try {
    console.log(process.env.MONGO_URI)
await mongoose.connect(process.env.MONGO_URI)
console.log('MongoDB working');
  // Start using the database
}
  catch (error) {
    console.log(error);
  }
}



