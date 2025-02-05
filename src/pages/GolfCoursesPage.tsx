import React, { useEffect, useState } from "react";

interface GolfCourse {
  id: number;
  club_name: string;
  course_name: string;
  location: {
    city: string;
    state: string;
  };
}

const GolfCoursesPage: React.FC = () => {
  const [golfCourses, setGolfCourses] = useState<GolfCourse[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const fetchGolfCourses = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/golf-courses");
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        console.log("Received Golf Course Data:", data);

        setGolfCourses(data);

        // Load favorites from localStorage
        const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        setFavorites(storedFavorites);
      } catch (error) {
        console.error("Golf Courses API Error:", error);
      }
    };

    fetchGolfCourses();
  }, []);

  // Function to toggle favorites
  const toggleFavorite = (id: number) => {
    let updatedFavorites;
    if (favorites.includes(id)) {
      updatedFavorites = favorites.filter((favId) => favId !== id);
    } else {
      updatedFavorites = [...favorites, id];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Golf Courses</h1>

      {golfCourses.length === 0 && <p className="text-gray-600">Loading golf courses...</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {golfCourses.map((course) => (
          <div
            key={course.id}
            className={`bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 p-4 relative ${
              favorites.includes(course.id) ? "border-4 border-yellow-500" : ""
            }`}
          >
            {/* Star button positioned at bottom-right */}
            <button
              onClick={() => toggleFavorite(course.id)}
              className={`absolute bottom-2 right-2 text-2xl p-1 transition-all duration-300 ${
                favorites.includes(course.id) ? "text-yellow-500" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {favorites.includes(course.id) ? "★" : "☆"}
            </button>

            <h2 className="text-xl font-semibold text-gray-800">{course.club_name}</h2>
            <p className="text-gray-600">{course.location.city}, {course.location.state}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GolfCoursesPage;