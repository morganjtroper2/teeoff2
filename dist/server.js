"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const golfRoutes_js_1 = require("./routes/golfRoutes.js"); // ✅ Fixed Import
const app = (0, express_1.default)();
// ✅ CORS Middleware (Corrected & Improved)
app.use((0, cors_1.default)({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
// ✅ Handle Preflight Requests Globally
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    if (req.method === "OPTIONS") {
        res.sendStatus(200); // ✅ Respond OK for preflight requests
    }
    else {
        next();
    }
});
app.use(express_1.default.json());
app.get("/", (_req, res) => {
    res.send("Backend is running!");
});
// ✅ API Routes
app.use("/api", golfRoutes_js_1.golfRouter);
// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
