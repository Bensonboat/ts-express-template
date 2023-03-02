import express from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Application works!");
});

dotenv.config();

app.listen(8000, () => {
  console.log("Application started on port 8000!");
});
