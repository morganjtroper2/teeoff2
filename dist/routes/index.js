"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = __importDefault(require("express"));
const userRoutes_js_1 = require("./api/userRoutes.js");
const router = express_1.default.Router();
exports.apiRouter = router;
router.use("/users", userRoutes_js_1.userRouter);
