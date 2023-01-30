import express from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Application works!");
});

dotenv.config();

const connect = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(`${process.env.MONGO_DB}`)
    .then(() => {
      console.log("connect to mongodb database");
    })
    .catch((err) => {
      throw err;
    });
};

app.listen(8000, () => {
  connect();
  console.log("Application started on port 8000!");
});
