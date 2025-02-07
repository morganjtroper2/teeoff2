"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const golfRoutes_js_1 = require("./routes/golfRoutes.js");
// import { hotelRouter } from "./routes/hotelRoutes.js";
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());

app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use("/api/golf-courses", golfRoutes_js_1.golfRouter);
// app.use("/api/hotels", hotelRouter);
app.get("/", (req, res) => {
    res.send("Backend is running!");
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
