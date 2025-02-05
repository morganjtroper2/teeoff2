import express from "express";
import { getGolfCourses, getGolfCourseById } from "../controllers/golfController";

const router = express.Router();

router.get("/golf-courses", getGolfCourses);
router.get("/golf-courses/:id", getGolfCourseById);

export default router;