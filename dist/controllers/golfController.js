"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGolfCourseById = exports.getGolfCourses = void 0;
const axios_1 = __importDefault(require("axios"));
// Hardcoded API Key for Golf Course API
const GOLF_API_KEY = "LF2I3IEZ6PRD64KTMKCEYYRKIU";

const getGolfCourses = async (req, res) => {
    try {
        const searchQuery = req.query.search_query || "golf";
        console.log(`Fetching golf courses for: ${searchQuery}`);
        const response = await axios_1.default.get("https://api.golfcourseapi.com/v1/search", {
            params: { search_query: searchQuery },
            headers: { Authorization: `Key ${GOLF_API_KEY}` },
        });
        console.log("API Response:", response.data);
        if (!response.data || !response.data.courses || response.data.courses.length === 0) {
            res.status(404).json({ message: "No golf courses found." });
            return;
        }
        res.json(response.data.courses);
    }
    catch (error) {
        console.error("Error fetching golf courses:", error.message);
        res.status(error.response?.status || 500).json({ message: "Failed to fetch golf courses." });
    }
};
exports.getGolfCourses = getGolfCourses;

const getGolfCourseById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(`Fetching course details for ID: ${id}`);
        const response = await axios_1.default.get(`https://api.golfcourseapi.com/v1/courses/${id}`, {
            headers: { Authorization: `Key ${GOLF_API_KEY}` },
        });
        console.log("Course Details Response:", response.data);
        if (!response.data) {
            res.status(404).json({ message: "Golf course not found." });
            return;
        }
        res.json(response.data);
    }
    catch (error) {
        console.error("Error fetching course details:", error.message);
        res.status(error.response?.status || 500).json({ message: "Failed to fetch course details." });
    }
};
exports.getGolfCourseById = getGolfCourseById;
