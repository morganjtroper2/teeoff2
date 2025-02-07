"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.golfRouter = void 0;
const express_1 = __importDefault(require("express"));
const golfController_js_1 = require("../controllers/golfController.js");
const router = express_1.default.Router();
exports.golfRouter = router;
router.get("/golf-courses", golfController_js_1.getGolfCourses);
router.get("/golf-courses/:id", golfController_js_1.getGolfCourseById);
