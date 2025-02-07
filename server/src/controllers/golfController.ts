import { Request, Response } from "express";
import axios from "axios";

const GOLF_API_KEY = "LF2I3IEZ6PRD64KTMKCEYYRKIU";

interface GolfCourse {
  id: number;
  club_name: string;
  course_name: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
}

interface GolfApiResponse {
  courses: GolfCourse[];
}

export const getGolfCourses = async (req: Request, res: Response) => {
  try {
    const searchQuery = (req.query.search_query as string) || "golf";
    console.log(`Fetching golf courses for: ${searchQuery}`);

    const response = await axios.get<GolfApiResponse>("https://api.golfcourseapi.com/v1/search", {
      params: { search_query: searchQuery },
      headers: { Authorization: `Key ${GOLF_API_KEY}` },
    });

    console.log("API Response:", response.data);

    if (!response.data || !response.data.courses || response.data.courses.length === 0) {
      res.status(404).json({ message: "No golf courses found." });
      return;
    }

    res.json(response.data.courses);
  } catch (error: any) {
    console.error("Error fetching golf courses:", error.message);
    res.status(error.response?.status || 500).json({ message: "Failed to fetch golf courses." });
  }
};

export const getGolfCourseById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log(`Fetching course details for ID: ${id}`);

    const response = await axios.get<GolfCourse>(`https://api.golfcourseapi.com/v1/courses/${id}`, {
      headers: { Authorization: `Key ${GOLF_API_KEY}` },
    });

    console.log("Course Details Response:", response.data);

    if (!response.data) {
      res.status(404).json({ message: "Golf course not found." });
      return;
    }

    res.json(response.data);
  } catch (error: any) {
    console.error("Error fetching course details:", error.message);
    res.status(error.response?.status || 500).json({ message: "Failed to fetch course details." });
  }
};