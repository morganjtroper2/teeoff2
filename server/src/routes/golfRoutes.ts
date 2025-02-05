import express from "express";
import { getGolfCourses, getGolfCourseById } from "../controllers/golfController.js"; // ✅ Fixed Import Path

const router = express.Router();

router.get("/golf-courses", getGolfCourses);
router.get("/golf-courses/:id", getGolfCourseById);

export { router as golfRouter }; // ✅ Ensured named export