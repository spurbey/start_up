import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.js";
import clubRoutes from "./routes/club.js"
import orgRoutes from "./routes/org.js"

import testimonyRoutes from "./routes/testimony.js"
import bidRoutes from "./routes/auctions.js"
import eventRoutes from "./routes/event.js"
import bookmarkRoutes from "./routes/bookmarks.js"

const app = express();
import { connect } from "./db/connect.js";
// import userSchema from "./model/userSchema.js";
// import bodyParser from 'body-parser';

// app.use(bodyParser.urlencoded({
//   extended: true
// }));
app.use(express.json());
app.use(cors());
dotenv.config();

app.get("/", (req, res) => {
  console.log("Hello");
  res.send({"status":"connected"});
});

// app.get("/get", async (req, res) => {
//   // console.log("Hello");
//   // res.send(await userSchema.find());
//  res.send(fe)
// });

//auth Routes
app.use("/", authRoutes);

app.use("/", clubRoutes)

app.use("/", testimonyRoutes)

app.use("/", eventRoutes)

app.use("/", orgRoutes)

app.use("/", bidRoutes)

app.use("/", bookmarkRoutes)


app.use(cookieParser());

const port = process.env.PORT || 8000;

const intializeServer = async () => {
  try {
    await connect();
    app.listen(port, () => {
      console.log(`Server listening to http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
intializeServer();
