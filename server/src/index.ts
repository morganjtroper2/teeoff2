import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import golfRoutes from "./routes/golfRoutes"; // Import golf course routes
import hotelRoutes from "./routes/hotelRoutes"; // Import hotel routes

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
app.use("/api/golf-courses", golfRoutes);
app.use("/api/hotels", hotelRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// ✅ Ensure PORT is set
const PORT: number = Number(process.env.PORT) || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));