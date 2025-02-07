import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GolfCoursesPage from "./pages/GolfCoursesPage";
import HotelPage from "./pages/HotelPage";
import FlightsPage from "./pages/FlightsPage";
import Layout from "./Components/Layout";

const App: React.FC = () => {
  return (
    <Router>
      <Layout> {/* No need to pass setShowLogin anymore */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/golf-courses" element={<GolfCoursesPage />} />
          <Route path="/hotels" element={<HotelPage />} />
          <Route path="/flights" element={<FlightsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
