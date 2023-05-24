import express from "express";
import authRoutes from "./routes/auth.js";
import cors from "cors";
import dotenv from "dotenv";
const app = express();
import { connect } from "./db/connect.js";

app.use(express.json());
app.use(cors());
dotenv.config();

app.get("/", (req, res) => {
  console.log("Hello");
  res.send("connected");
});
//auth Routes
app.use("/api/auth", authRoutes);

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
