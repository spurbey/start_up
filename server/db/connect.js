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



// CONNECT TO LOCAL DATABASE
// import mongoose from 'mongoose';

// export const connect = async () => {
//   try {
//     const data = await mongoose.connect(
//       "mongodb://localhost:27017/spoonsored",
//       { useNewUrlParser: true, useUnifiedTopology: true }
//     );
//     if (data) console.log("Connected to Mongo DB!");
//   } catch (err) {
//     console.log("DB connection error", err);
//   }
// };

// export const connect = async ()=>{
//   try {
//     console.log(process.env.MONGO_URI)
// await mongoose.connect(process.env.MONGO_URI)
// console.log('MongoDB working');
//   // Start using the database
// }
//   catch (error) {
//     console.log(error);
//   }
// }

