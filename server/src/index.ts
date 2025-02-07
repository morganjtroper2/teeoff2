import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { golfRouter } from "./routes/golfRoutes.js"; 
// import { hotelRouter } from "./routes/hotelRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/api/golf-courses", golfRouter);
// app.use("/api/hotels", hotelRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Backend is running!");
});

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));