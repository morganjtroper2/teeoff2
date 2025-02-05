import { Request, Response } from "express";
import axios from "axios";

// Hardcoded API Key for Golf Course API
const GOLF_API_KEY = "LF2I3IEZ6PRD64KTMKCEYYRKIU";

// Fetch Golf Courses
export const getGolfCourses = async (req: Request, res: Response) => {
  try {
    const searchQuery = req.query.search_query as string || "golf";
    console.log(`Fetching golf courses for: ${searchQuery}`);

    const response = await axios.get("https://api.golfcourseapi.com/v1/search", {
      params: { search_query: searchQuery },
      headers: { Authorization: `Key ${GOLF_API_KEY}` }, // ✅ Uses Hardcoded API Key
    });

    console.log("API Response:", response.data);

    if (!response.data.courses || response.data.courses.length === 0) {
      return res.status(404).json({ message: "No golf courses found." });
    }

    res.json(response.data.courses);
  } catch (error: any) {
    console.error("Error fetching golf courses:", error.message);
    res.status(500).json({ message: "Failed to fetch golf courses." });
  }
};

// Fetch Golf Course by ID
export const getGolfCourseById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log(`Fetching course details for ID: ${id}`);

    const response = await axios.get(`https://api.golfcourseapi.com/v1/courses/${id}`, {
      headers: { Authorization: `Key ${GOLF_API_KEY}` }, // ✅ Uses Hardcoded API Key
    });

    console.log("Course Details Response:", response.data);

    res.json(response.data);
  } catch (error: any) {
    console.error("Error fetching course details:", error.message);
    res.status(500).json({ message: "Failed to fetch course details." });
  }
};