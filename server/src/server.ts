import express from "express";
import cors from "cors";
import golfRoutes from "./routes/golfRoutes";
import hotelRoutes from "./routes/hotelRoutes";

const app = express();

// ✅ CORS Middleware (Updated)
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "access-control-allow-origin",
    ],
  })
);

// ✅ Handle Preflight Requests Properly
app.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, access-control-allow-origin"
  );
  res.sendStatus(200);
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// ✅ API Routes
app.use("/api", golfRoutes);
// app.use("/api", hotelRoutes);

// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));