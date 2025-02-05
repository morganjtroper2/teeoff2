import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { golfRouter } from "./routes/golfRoutes.js"; // ✅ Fixed Import

const app = express();

// ✅ CORS Middleware (Corrected & Improved)
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Handle Preflight Requests Globally
app.use((req: Request, res: Response, next: NextFunction): void => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    res.sendStatus(200); // ✅ Respond OK for preflight requests
  } else {
    next();
  }
});

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Backend is running!");
});

// ✅ API Routes
app.use("/api", golfRouter);

// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));