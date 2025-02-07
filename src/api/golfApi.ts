import axios from "axios";

const api = axios.create({
  baseURL: "https://teeoff2.onrender.com/api/golf-courses",
});

export const fetchCourses = async (searchQuery: string) => {
  try {
    console.log(`Requesting golf courses for: ${searchQuery}`);

    const response = await api.get("/golf-courses", {
      params: { search_query: searchQuery },
    });

    console.log("API Response:", response.data);

    if (!response.data || response.data.length === 0) {
      throw new Error("No golf courses found.");
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching golf courses:", error);
    throw error;
  }
};