import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { golfRouter } from "./routes/golfRoutes.js"; // ✅ FIXED Named Import
// import { hotelRouter } from "./routes/hotelRoutes.js"; // ✅ FIXED (Commented Out)

dotenv.config();

const app = express();
app.use(express.json());

// ✅ Enable CORS explicitly for frontend at http://localhost:5173
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Add routes
app.use("/api/golf-courses", golfRouter);
// app.use("/api/hotels", hotelRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Backend is running!");
});

// ✅ Ensure PORT is set
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));