import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import membershipRoute from "./routes/membershipRoute.js";
import productRoute from "./routes/productRoute.js";
import classRoute from "./routes/classRoute.js";
import paymentRoute from "./routes/paymentRoute.js";
import coachRoute from "./routes/coachRoute.js";


import cors from "cors";


const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 27017;
const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("DB connected successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port :${PORT} `);
    });
  })
  .catch((error) => console.log(error));

app.use("/api", [userRoute, membershipRoute, productRoute, classRoute, paymentRoute, coachRoute]);
